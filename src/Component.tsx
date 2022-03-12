import React from "react";

export default (props:any) =>
{

    let [stateGet, stateSet] = React.useState(0);

    return <dl>
        <dt>children?</dt>
        <dd>{ props.children }</dd>
    </dl>;
};