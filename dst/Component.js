import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
export default (props) => {
    let [stateGet, stateSet] = React.useState(0);
    return _jsxs("dl", { children: [_jsx("dt", { children: "children?" }), _jsx("dd", { children: props.children })] });
};
