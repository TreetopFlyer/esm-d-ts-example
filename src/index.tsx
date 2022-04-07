import { render } from "react-dom";
import Component from "./Component.js";

render(
<div>
    <h1>hey</h1>
    <Component><h2>sup</h2></Component>
</div>,
document.querySelector("#app"));