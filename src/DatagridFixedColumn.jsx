import "./ui/DatagridFixedColumn.css";

export default function DatagridFixedColumn(props) {
    const usedClass = `.${props.className}`;
    const table = document.querySelector(usedClass);

    const observer = new MutationObserver(fixFirstColumn);
    observer.observe(table, { childList: true, subtree: true });

    function fixFirstColumn() {
        const context = table.querySelector("tbody");
        const rows = context.querySelectorAll("tr");
        const headerFirstColumn = table.querySelector("thead th:first-child");
        const scrollElement = table.querySelector(".mx-grid-content");
        const scrollLayout = document.querySelector(".mx-scrollcontainer-center .mx-scrollcontainer-wrapper");

        if (headerFirstColumn) {
            const headerFirstColumnRect = headerFirstColumn.getBoundingClientRect();
            headerFirstColumn.style.width = `${headerFirstColumnRect.width}px`;
            headerFirstColumn.classList.add("fixed-cell");
        }

        function onHorizontalScroll(event) {
            const fixedCells = table.querySelectorAll(".fixed-cell");
            fixedCells.forEach(fixedCell => {
                if (event.target.scrollLeft > 0) {
                    fixedCell.classList.add("scroll");
                } else if (event.target.scrollLeft === 0) {
                    fixedCell.classList.remove("scroll");
                }
            });
        }

        function onVerticalScroll(event) {
            const fixedCells = table.querySelectorAll(".fixed-cell");
            fixedCells.forEach(fixedCell => {
                fixedCell.style.transform = `translate(0, -${event.target.scrollTop}px)`;
            });
        }

        function applyCustomScroll() {
            const customScrollbar = props.customScroll;
            if (customScrollbar === true) {
                table.classList.add("custom-scroll");
            }
        }

        function stickyCaptions() {
            const captions = table.querySelectorAll(".mx-datagrid-head-caption");
            captions.forEach(caption => {
                caption.style.left = `${headerFirstColumn.getBoundingClientRect().width + 8}px`;
            });
        }

        rows.forEach(row => {
            const fixedColumn = row.querySelector("td:first-child");
            const fixedColumnRect = fixedColumn.getBoundingClientRect();

            fixedColumn.style.width = `${fixedColumnRect.width}px`;
            fixedColumn.style.height = `${fixedColumnRect.height}px`;
            fixedColumn.classList.add("fixed-cell");
        });

        scrollElement.addEventListener("scroll", onHorizontalScroll);
        scrollLayout.addEventListener("scroll", onVerticalScroll);

        applyCustomScroll();
        stickyCaptions();
    }
}
