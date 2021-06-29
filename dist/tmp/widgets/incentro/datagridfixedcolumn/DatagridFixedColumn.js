define(function () { 'use strict';

  

  function ___$insertStyle(css) {
    if (!css) {
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }

    var style = document.createElement('style');

    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
  }

  ___$insertStyle(".table-fixedcolumn table tbody tr td {\n  margin-top: 1px;\n}\n\n.table-fixedcolumn table th .mx-datagrid-head-caption {\n  display: inherit;\n  position: sticky;\n}\n\n.table-fixedcolumn .mx-grid-content {\n  overflow: auto;\n  padding-bottom: 2px;\n}\n\n.table-fixedcolumn .fixed-cell {\n  background-color: var(--background-primary);\n  border-right: solid 1px var(--border-color);\n  position: fixed;\n  transition: none;\n  z-index: 1;\n}\n\n.table-fixedcolumn .fixed-cell::after {\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.table-fixedcolumn .fixed-cell.scroll::after {\n  opacity: 1;\n}\n\n/* Custom scrollbar */\n.table-fixedcolumn.custom-scroll {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar {\n  height: 6px;\n  width: 6px;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n  border: 0;\n}");

  function DatagridFixedColumn(props) {
    const usedClass = `.${props.className}`;
    const table = document.querySelector(usedClass);
    const observer = new MutationObserver(fixFirstColumn);
    observer.observe(table, {
      childList: true,
      subtree: true
    });

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

  return DatagridFixedColumn;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWdyaWRGaXhlZENvbHVtbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0RhdGFncmlkRml4ZWRDb2x1bW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdWkvRGF0YWdyaWRGaXhlZENvbHVtbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YWdyaWRGaXhlZENvbHVtbihwcm9wcykge1xuICAgIGNvbnN0IHVzZWRDbGFzcyA9IGAuJHtwcm9wcy5jbGFzc05hbWV9YDtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlZENsYXNzKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZml4Rmlyc3RDb2x1bW4pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFibGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gICAgZnVuY3Rpb24gZml4Rmlyc3RDb2x1bW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyRmlyc3RDb2x1bW4gPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGhlYWQgdGg6Zmlyc3QtY2hpbGRcIik7XG4gICAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwiLm14LWdyaWQtY29udGVudFwiKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teC1zY3JvbGxjb250YWluZXItY2VudGVyIC5teC1zY3JvbGxjb250YWluZXItd3JhcHBlclwiKTtcblxuICAgICAgICBpZiAoaGVhZGVyRmlyc3RDb2x1bW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckZpcnN0Q29sdW1uUmVjdCA9IGhlYWRlckZpcnN0Q29sdW1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaGVhZGVyRmlyc3RDb2x1bW4uc3R5bGUud2lkdGggPSBgJHtoZWFkZXJGaXJzdENvbHVtblJlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgaGVhZGVyRmlyc3RDb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpeGVkLWNlbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkhvcml6b250YWxTY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkQ2VsbHMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpeGVkLWNlbGxcIik7XG4gICAgICAgICAgICBmaXhlZENlbGxzLmZvckVhY2goZml4ZWRDZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblZlcnRpY2FsU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENlbGxzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbChcIi5maXhlZC1jZWxsXCIpO1xuICAgICAgICAgICAgZml4ZWRDZWxscy5mb3JFYWNoKGZpeGVkQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgZml4ZWRDZWxsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgLSR7ZXZlbnQudGFyZ2V0LnNjcm9sbFRvcH1weClgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhcHBseUN1c3RvbVNjcm9sbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNjcm9sbGJhciA9IHByb3BzLmN1c3RvbVNjcm9sbDtcbiAgICAgICAgICAgIGlmIChjdXN0b21TY3JvbGxiYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNjcm9sbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0aWNreUNhcHRpb25zKCkge1xuICAgICAgICAgICAgY29uc3QgY2FwdGlvbnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm14LWRhdGFncmlkLWhlYWQtY2FwdGlvblwiKTtcbiAgICAgICAgICAgIGNhcHRpb25zLmZvckVhY2goY2FwdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbi5zdHlsZS5sZWZ0ID0gYCR7aGVhZGVyRmlyc3RDb2x1bW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyA4fXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKFwidGQ6Zmlyc3QtY2hpbGRcIik7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENvbHVtblJlY3QgPSBmaXhlZENvbHVtbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgZml4ZWRDb2x1bW4uc3R5bGUud2lkdGggPSBgJHtmaXhlZENvbHVtblJlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgZml4ZWRDb2x1bW4uc3R5bGUuaGVpZ2h0ID0gYCR7Zml4ZWRDb2x1bW5SZWN0LmhlaWdodH1weGA7XG4gICAgICAgICAgICBmaXhlZENvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtY2VsbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uSG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICAgIHNjcm9sbExheW91dC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uVmVydGljYWxTY3JvbGwpO1xuXG4gICAgICAgIGFwcGx5Q3VzdG9tU2Nyb2xsKCk7XG4gICAgICAgIHN0aWNreUNhcHRpb25zKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkRhdGFncmlkRml4ZWRDb2x1bW4iLCJwcm9wcyIsInVzZWRDbGFzcyIsImNsYXNzTmFtZSIsInRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZml4Rmlyc3RDb2x1bW4iLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsImNvbnRleHQiLCJyb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlckZpcnN0Q29sdW1uIiwic2Nyb2xsRWxlbWVudCIsInNjcm9sbExheW91dCIsImhlYWRlckZpcnN0Q29sdW1uUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwid2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbkhvcml6b250YWxTY3JvbGwiLCJldmVudCIsImZpeGVkQ2VsbHMiLCJmb3JFYWNoIiwiZml4ZWRDZWxsIiwidGFyZ2V0Iiwic2Nyb2xsTGVmdCIsInJlbW92ZSIsIm9uVmVydGljYWxTY3JvbGwiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxUb3AiLCJhcHBseUN1c3RvbVNjcm9sbCIsImN1c3RvbVNjcm9sbGJhciIsImN1c3RvbVNjcm9sbCIsInN0aWNreUNhcHRpb25zIiwiY2FwdGlvbnMiLCJjYXB0aW9uIiwibGVmdCIsInJvdyIsImZpeGVkQ29sdW1u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
