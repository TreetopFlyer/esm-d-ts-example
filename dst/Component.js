import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import styled from "styled-components";
const Title = styled.dt `
    padding:20px;
    color:blue;
`;
export default (props) => {
    let [stateGet, stateSet] = useState(0);
    return _jsxs("dl", { children: [_jsx(Title, { children: "children?" }), _jsx("dd", { children: props.children })] });
};
//# sourceMappingURL=Component.js.map