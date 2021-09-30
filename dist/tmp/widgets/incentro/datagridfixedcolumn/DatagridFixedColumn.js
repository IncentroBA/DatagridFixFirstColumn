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

  function waitFor(elementClass, callback, parent) {
    const context = parent || document;

    if (context.querySelector(elementClass)) {
      callback();
    } else {
      const observer = new MutationObserver(() => {
        if (context.querySelector(elementClass)) {
          observer.disconnect();
          callback();
        }
      }); // Start observing

      observer.observe(context, {
        childList: true,
        //This is a must have for the observer with subtree
        subtree: true //Set to true if changes must also be observed in descendants.

      });
    }
  }

  function DatagridFixedColumn(props) {
    function fixFirstColumn() {
      setTimeout(() => {
        const className = "." + props.className;
        const table = document.querySelector(className);
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
      }, 300);
    }

    waitFor(`.${props.className}`, fixFirstColumn, document);
    return null;
  }

  return DatagridFixedColumn;

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWdyaWRGaXhlZENvbHVtbi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2hlbHBlcnMvd2FpdEZvci5qcyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9EYXRhZ3JpZEZpeGVkQ29sdW1uLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gd2FpdEZvcihlbGVtZW50Q2xhc3MsIGNhbGxiYWNrLCBwYXJlbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gcGFyZW50IHx8IGRvY3VtZW50O1xuXG4gICAgaWYgKGNvbnRleHQucXVlcnlTZWxlY3RvcihlbGVtZW50Q2xhc3MpKSB7XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcigoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5xdWVyeVNlbGVjdG9yKGVsZW1lbnRDbGFzcykpIHtcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RhcnQgb2JzZXJ2aW5nXG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUoY29udGV4dCwge1xuICAgICAgICAgICAgY2hpbGRMaXN0OiB0cnVlLCAvL1RoaXMgaXMgYSBtdXN0IGhhdmUgZm9yIHRoZSBvYnNlcnZlciB3aXRoIHN1YnRyZWVcbiAgICAgICAgICAgIHN1YnRyZWU6IHRydWUgLy9TZXQgdG8gdHJ1ZSBpZiBjaGFuZ2VzIG11c3QgYWxzbyBiZSBvYnNlcnZlZCBpbiBkZXNjZW5kYW50cy5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFwiLi91aS9EYXRhZ3JpZEZpeGVkQ29sdW1uLmNzc1wiO1xuaW1wb3J0IHsgd2FpdEZvciB9IGZyb20gXCIuL2hlbHBlcnMvd2FpdEZvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRhZ3JpZEZpeGVkQ29sdW1uKHByb3BzKSB7XG4gICAgZnVuY3Rpb24gZml4Rmlyc3RDb2x1bW4oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lID0gXCIuXCIgKyBwcm9wcy5jbGFzc05hbWU7XG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwidGJvZHlcIik7XG4gICAgICAgICAgICBjb25zdCByb3dzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKFwidHJcIik7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJGaXJzdENvbHVtbiA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0aGVhZCB0aDpmaXJzdC1jaGlsZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbEVsZW1lbnQgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKFwiLm14LWdyaWQtY29udGVudFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbExheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXgtc2Nyb2xsY29udGFpbmVyLWNlbnRlciAubXgtc2Nyb2xsY29udGFpbmVyLXdyYXBwZXJcIik7XG5cbiAgICAgICAgICAgIGlmIChoZWFkZXJGaXJzdENvbHVtbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhlYWRlckZpcnN0Q29sdW1uUmVjdCA9IGhlYWRlckZpcnN0Q29sdW1uLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgICAgIGhlYWRlckZpcnN0Q29sdW1uLnN0eWxlLndpZHRoID0gYCR7aGVhZGVyRmlyc3RDb2x1bW5SZWN0LndpZHRofXB4YDtcbiAgICAgICAgICAgICAgICBoZWFkZXJGaXJzdENvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZml4ZWQtY2VsbFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gb25Ib3Jpem9udGFsU2Nyb2xsKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRDZWxscyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZml4ZWQtY2VsbFwiKTtcbiAgICAgICAgICAgICAgICBmaXhlZENlbGxzLmZvckVhY2goZml4ZWRDZWxsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZml4ZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpeGVkQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwic2Nyb2xsXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uVmVydGljYWxTY3JvbGwoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZENlbGxzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbChcIi5maXhlZC1jZWxsXCIpO1xuICAgICAgICAgICAgICAgIGZpeGVkQ2VsbHMuZm9yRWFjaChmaXhlZENlbGwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaXhlZENlbGwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgwLCAtJHtldmVudC50YXJnZXQuc2Nyb2xsVG9wfXB4KWA7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFwcGx5Q3VzdG9tU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbVNjcm9sbGJhciA9IHByb3BzLmN1c3RvbVNjcm9sbDtcbiAgICAgICAgICAgICAgICBpZiAoY3VzdG9tU2Nyb2xsYmFyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJjdXN0b20tc2Nyb2xsXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RpY2t5Q2FwdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FwdGlvbnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLm14LWRhdGFncmlkLWhlYWQtY2FwdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjYXB0aW9ucy5mb3JFYWNoKGNhcHRpb24gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uLnN0eWxlLmxlZnQgPSBgJHtoZWFkZXJGaXJzdENvbHVtbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCArIDh9cHhgO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaXhlZENvbHVtbiA9IHJvdy5xdWVyeVNlbGVjdG9yKFwidGQ6Zmlyc3QtY2hpbGRcIik7XG4gICAgICAgICAgICAgICAgY29uc3QgZml4ZWRDb2x1bW5SZWN0ID0gZml4ZWRDb2x1bW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBmaXhlZENvbHVtbi5zdHlsZS53aWR0aCA9IGAke2ZpeGVkQ29sdW1uUmVjdC53aWR0aH1weGA7XG4gICAgICAgICAgICAgICAgZml4ZWRDb2x1bW4uc3R5bGUuaGVpZ2h0ID0gYCR7Zml4ZWRDb2x1bW5SZWN0LmhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgZml4ZWRDb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpeGVkLWNlbGxcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2Nyb2xsRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG9uSG9yaXpvbnRhbFNjcm9sbCk7XG4gICAgICAgICAgICBzY3JvbGxMYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBvblZlcnRpY2FsU2Nyb2xsKTtcblxuICAgICAgICAgICAgYXBwbHlDdXN0b21TY3JvbGwoKTtcbiAgICAgICAgICAgIHN0aWNreUNhcHRpb25zKCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfVxuXG4gICAgd2FpdEZvcihgLiR7cHJvcHMuY2xhc3NOYW1lfWAsIGZpeEZpcnN0Q29sdW1uLCBkb2N1bWVudCk7XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJ3YWl0Rm9yIiwiZWxlbWVudENsYXNzIiwiY2FsbGJhY2siLCJwYXJlbnQiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib2JzZXJ2ZXIiLCJNdXRhdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm9ic2VydmUiLCJjaGlsZExpc3QiLCJzdWJ0cmVlIiwiRGF0YWdyaWRGaXhlZENvbHVtbiIsInByb3BzIiwiZml4Rmlyc3RDb2x1bW4iLCJzZXRUaW1lb3V0IiwiY2xhc3NOYW1lIiwidGFibGUiLCJyb3dzIiwicXVlcnlTZWxlY3RvckFsbCIsImhlYWRlckZpcnN0Q29sdW1uIiwic2Nyb2xsRWxlbWVudCIsInNjcm9sbExheW91dCIsImhlYWRlckZpcnN0Q29sdW1uUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwid2lkdGgiLCJjbGFzc0xpc3QiLCJhZGQiLCJvbkhvcml6b250YWxTY3JvbGwiLCJldmVudCIsImZpeGVkQ2VsbHMiLCJmb3JFYWNoIiwiZml4ZWRDZWxsIiwidGFyZ2V0Iiwic2Nyb2xsTGVmdCIsInJlbW92ZSIsIm9uVmVydGljYWxTY3JvbGwiLCJ0cmFuc2Zvcm0iLCJzY3JvbGxUb3AiLCJhcHBseUN1c3RvbVNjcm9sbCIsImN1c3RvbVNjcm9sbGJhciIsImN1c3RvbVNjcm9sbCIsInN0aWNreUNhcHRpb25zIiwiY2FwdGlvbnMiLCJjYXB0aW9uIiwibGVmdCIsInJvdyIsImZpeGVkQ29sdW1uIiwiZml4ZWRDb2x1bW5SZWN0IiwiaGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFPLFNBQVNBLE9BQVQsQ0FBaUJDLFlBQWpCLEVBQStCQyxRQUEvQixFQUF5Q0MsTUFBekMsRUFBaUQ7RUFDcEQsUUFBTUMsT0FBTyxHQUFHRCxNQUFNLElBQUlFLFFBQTFCOztFQUVBLE1BQUlELE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkwsWUFBdEIsQ0FBSixFQUF5QztFQUNyQ0MsSUFBQUEsUUFBUTtFQUNYLEdBRkQsTUFFTztFQUNILFVBQU1LLFFBQVEsR0FBRyxJQUFJQyxnQkFBSixDQUFxQixNQUFNO0VBQ3hDLFVBQUlKLE9BQU8sQ0FBQ0UsYUFBUixDQUFzQkwsWUFBdEIsQ0FBSixFQUF5QztFQUNyQ00sUUFBQUEsUUFBUSxDQUFDRSxVQUFUO0VBQ0FQLFFBQUFBLFFBQVE7RUFDWDtFQUNKLEtBTGdCLENBQWpCLENBREc7O0VBU0hLLElBQUFBLFFBQVEsQ0FBQ0csT0FBVCxDQUFpQk4sT0FBakIsRUFBMEI7RUFDdEJPLE1BQUFBLFNBQVMsRUFBRSxJQURXO0VBQ0w7RUFDakJDLE1BQUFBLE9BQU8sRUFBRSxJQUZhOztFQUFBLEtBQTFCO0VBSUg7RUFDSjs7RUNoQmMsU0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0VBQy9DLFdBQVNDLGNBQVQsR0FBMEI7RUFDdEJDLElBQUFBLFVBQVUsQ0FBQyxNQUFNO0VBQ2IsWUFBTUMsU0FBUyxHQUFHLE1BQU1ILEtBQUssQ0FBQ0csU0FBOUI7RUFDQSxZQUFNQyxLQUFLLEdBQUdiLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QlcsU0FBdkIsQ0FBZDtFQUNBLFlBQU1iLE9BQU8sR0FBR2Ms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
