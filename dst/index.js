import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from "react-dom";
import Component from "./Component.js";
render(_jsxs("div", { children: [_jsx("h1", { children: "hey" }), _jsx(Component, { children: _jsx("h2", { children: "sup" }) })] }), document.querySelector("#app"));
