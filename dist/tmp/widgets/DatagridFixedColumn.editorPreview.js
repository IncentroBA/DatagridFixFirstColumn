'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var require$$0 = ".table-fixedcolumn table tbody tr td {\n  margin-top: 1px;\n}\n\n.table-fixedcolumn table th .mx-datagrid-head-caption {\n  display: inherit;\n  position: sticky;\n}\n\n.table-fixedcolumn .mx-grid-content {\n  overflow: auto;\n  padding-bottom: 2px;\n}\n\n.table-fixedcolumn .fixed-cell {\n  background-color: var(--background-primary, white);\n  border-right: solid 1px var(--border-color, #d7d7d7);\n  position: fixed;\n  transition: none;\n  z-index: 1;\n}\n\n.table-fixedcolumn .fixed-cell::after {\n  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.16);\n  content: \"\";\n  display: block;\n  height: 100%;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  pointer-events: none;\n  transition: opacity 0.3s ease;\n  top: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.table-fixedcolumn .fixed-cell.scroll::after {\n  opacity: 1;\n}\n\n/* Custom scrollbar */\n.table-fixedcolumn.custom-scroll {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(0, 0, 0, 0.4) transparent;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar {\n  height: 6px;\n  width: 6px;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.table-fixedcolumn.custom-scroll ::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 50px;\n  border: 0;\n}";

class preview extends react.Component {
  render() {
    return react.createElement("div", null, "This widget has no preview");
  }

}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWdyaWRGaXhlZENvbHVtbi5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvRGF0YWdyaWRGaXhlZENvbHVtbi5lZGl0b3JQcmV2aWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNsYXNzIHByZXZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+VGhpcyB3aWRnZXQgaGFzIG5vIHByZXZpZXc8L2Rpdj47XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJldmlld0NzcygpIHtcbiAgICByZXR1cm4gcmVxdWlyZShcIi4vdWkvRGF0YWdyaWRGaXhlZENvbHVtbi5jc3NcIik7XG59XG4iXSwibmFtZXMiOlsicHJldmlldyIsIkNvbXBvbmVudCIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJnZXRQcmV2aWV3Q3NzIiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFTyxNQUFNQSxPQUFOLFNBQXNCQyxlQUF0QixDQUFnQztBQUNuQ0MsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsV0FBT0MsOERBQVA7QUFDSDs7QUFIa0M7QUFNaEMsU0FBU0MsYUFBVCxHQUF5QjtBQUM1QixTQUFPQyxVQUFQO0FBQ0g7Ozs7OyJ9
