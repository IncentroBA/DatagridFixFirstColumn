import { Component, createElement } from "react";

export class preview extends Component {
    render() {
        return <div>This widget has no preview</div>;
    }
}

export function getPreviewCss() {
    return require("./ui/DatagridFixedColumn.css");
}
