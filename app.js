// @ts-check
import { useContext } from "react";
import { html } from "html";
import * as Store from "./store.js";

const Deep = () =>
{
    const [State, Dispatch] = Store.Consume();
    return html`<p>${State.Current.Key}</p>`;
};

export default html`
    <${Store.Provide}>
        <div>
            <h1>History!</h1>
            <${Deep}//>
        </div>
    <//>
`;