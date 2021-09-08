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

    return null;
  }

  return DatagridFixedColumn;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWdyaWRGaXhlZENvbHVtbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL0RhdGFncmlkRml4ZWRDb2x1bW4uanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vdWkvRGF0YWdyaWRGaXhlZENvbHVtbi5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0YWdyaWRGaXhlZENvbHVtbihwcm9wcykge1xuICAgIGNvbnN0IHVzZWRDbGFzcyA9IGAuJHtwcm9wcy5jbGFzc05hbWV9YDtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodXNlZENsYXNzKTtcblxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZml4Rmlyc3RDb2x1bW4pO1xuICAgIG9ic2VydmVyLm9ic2VydmUodGFibGUsIHsgY2hpbGRMaXN0OiB0cnVlLCBzdWJ0cmVlOiB0cnVlIH0pO1xuXG4gICAgZnVuY3Rpb24gZml4Rmlyc3RDb2x1bW4oKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG4gICAgICAgIGNvbnN0IHJvd3MgPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKTtcbiAgICAgICAgY29uc3QgaGVhZGVyRmlyc3RDb2x1bW4gPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGhlYWQgdGg6Zmlyc3QtY2hpbGRcIik7XG4gICAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwiLm14LWdyaWQtY29udGVudFwiKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsTGF5b3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teC1zY3JvbGxjb250YWluZXItY2VudGVyIC5teC1zY3JvbGxjb250YWluZXItd3JhcHBlclwiKTtcblxuICAgICAgICBpZiAoaGVhZGVyRmlyc3RDb2x1bW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlckZpcnN0Q29sdW1uUmVjdCA9IGhlYWRlckZpcnN0Q29sdW1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaGVhZGVyRmlyc3RDb2x1bW4uc3R5bGUud2lkdGggPSBgJHtoZWFkZXJGaXJzdENvbHVtblJlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgaGVhZGVyRmlyc3RDb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpeGVkLWNlbGxcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkhvcml6b250YWxTY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpeGVkQ2VsbHMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpeGVkLWNlbGxcIik7XG4gICAgICAgICAgICBmaXhlZENlbGxzLmZvckVhY2goZml4ZWRDZWxsID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpeGVkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2Nyb2xsXCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZml4ZWRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvblZlcnRpY2FsU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENlbGxzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbChcIi5maXhlZC1jZWxsXCIpO1xuICAgICAgICAgICAgZml4ZWRDZWxscy5mb3JFYWNoKGZpeGVkQ2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgZml4ZWRDZWxsLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoMCwgLSR7ZXZlbnQudGFyZ2V0LnNjcm9sbFRvcH1weClgO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhcHBseUN1c3RvbVNjcm9sbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNjcm9sbGJhciA9IHByb3BzLmN1c3RvbVNjcm9sbDtcbiAgICAgICAgICAgIGlmIChjdXN0b21TY3JvbGxiYXIgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKFwiY3VzdG9tLXNjcm9sbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0aWNreUNhcHRpb25zKCkge1xuICAgICAgICAgICAgY29uc3QgY2FwdGlvbnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm14LWRhdGFncmlkLWhlYWQtY2FwdGlvblwiKTtcbiAgICAgICAgICAgIGNhcHRpb25zLmZvckVhY2goY2FwdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbi5zdHlsZS5sZWZ0ID0gYCR7aGVhZGVyRmlyc3RDb2x1bW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKyA4fXB4YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKFwidGQ6Zmlyc3QtY2hpbGRcIik7XG4gICAgICAgICAgICBjb25zdCBmaXhlZENvbHVtblJlY3QgPSBmaXhlZENvbHVtbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgICAgZml4ZWRDb2x1bW4uc3R5bGUud2lkdGggPSBgJHtmaXhlZENvbHVtblJlY3Qud2lkdGh9cHhgO1xuICAgICAgICAgICAgZml4ZWRDb2x1bW4uc3R5bGUuaGVpZ2h0ID0gYCR7Zml4ZWRDb2x1bW5SZWN0LmhlaWdodH1weGA7XG4gICAgICAgICAgICBmaXhlZENvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtY2VsbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uSG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICAgIHNjcm9sbExheW91dC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uVmVydGljYWxTY3JvbGwpO1xuXG4gICAgICAgIGFwcGx5Q3VzdG9tU2Nyb2xsKCk7XG4gICAgICAgIHN0aWNreUNhcHRpb25zKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG59XG4iXSwibmFtZXMiOlsiRGF0YWdyaWRGaXhlZENvbHVtbiIsInByb3BzIiwidXNlZENsYXNzIiwiY2xhc3NOYW1lIiwidGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJmaXhGaXJzdENvbHVtbiIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiY29udGV4dCIsInJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGVhZGVyRmlyc3RDb2x1bW4iLCJzY3JvbGxFbGVtZW50Iiwic2Nyb2xsTGF5b3V0IiwiaGVhZGVyRmlyc3RDb2x1bW5SZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic3R5bGUiLCJ3aWR0aCIsImNsYXNzTGlzdCIsImFkZCIsIm9uSG9yaXpvbnRhbFNjcm9sbCIsImV2ZW50IiwiZml4ZWRDZWxscyIsImZvckVhY2giLCJmaXhlZENlbGwiLCJ0YXJnZXQiLCJzY3JvbGxMZWZ0IiwicmVtb3ZlIiwib25WZXJ0aWNhbFNjcm9sbCIsInRyYW5zZm9ybSIsInNjcm9sbFRvcCIsImFwcGx5Q3VzdG9tU2Nyb2xsIiwiY3VzdG9tU2Nyb2xsYmFyIiwiY3VzdG9tU2Nyb2xsIiwic3RpY2t5Q2FwdGlvbnMiLCJjYXB0aW9ucyIsImNhcHRpb24iLCJsZWZ0Iiwicm93IiwiZml4ZWRDb2x1bW4iLCJmaXhlZENvbHVtblJlY3QiLCJoZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBRWUsU0FBU0EsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0VBQy9DLFFBQU1DLFNBQVMsR0FBSSxJQUFHRCxLQUFLLENBQUNFLFNBQVUsRUFBdEM7RUFDQSxRQUFNQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkosU0FBdkIsQ0FBZDtFQUVBLFFBQU1LLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQkMsY0FBckIsQ0FBakI7RUFDQUYsRUFBQUEsUUFBUSxDQUFDRyxPQUFULENBQWlCTixLQUFqQixFQUF3QjtFQUFFTyxJQUFBQSxTQUFTLEVBQUUsSUFBYjtFQUFtQkMsSUFBQUEsT0FBTyxFQUFFO0VBQTVCLEdBQXhCOztFQUVBLFdBQVNILGNBQVQsR0FBMEI7RUFDdEIsVUFBTUksT0FBTyxHQUFHVCxLQUFLLENBQUNFLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBaEI7RUFDQSxVQUFNUSxJQUFJLEdBQUdELE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsSUFBekIsQ0FBYjtFQUNBLFVBQU1DLGlCQUFpQixHQUFHWixLQUFLLENBQUNFLGFBQU4sQ0FBb0Isc0JBQXBCLENBQTFCO0VBQ0EsVUFBTVcsYUFBYSxHQUFHYixLQUFLLENBQUNFLGFBQU4sQ0FBb0Isa0JBQXBCLENBQXRCO0VBQ0EsVUFBTVksWUFBWSxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0RBQXZCLENBQXJCOztFQUVBLFFBQUlVLGlCQUFKLEVBQXVCO0VBQ25CLFlBQU1HLHFCQUFxQixHQUFHSCxpQkFBaUIsQ0FBQ0kscUJBQWxCLEVBQTlCO0VBQ0FKLE1BQUFBLGlCQUFpQixDQUFDSyxLQUFsQixDQUF3QkMsS0FBeEIsR0FBaUMsR0FBRUgscUJBQXFCLENBQUNHLEtBQU0sSUFBL0Q7RUFDQU4sTUFBQUEsaUJBQWlCLENBQUNPLFNBQWxC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
