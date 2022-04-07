import { useState } from "react";
import styled from "styled-components"

const Title = styled.dt`
    padding:20px;
    color:blue;
`;

export default (props:any) =>
{
    let [stateGet, stateSet] = useState(0);
    return <dl>
        <Title>children?</Title>
        <dd>{ props.children }</dd>
    </dl>;
};