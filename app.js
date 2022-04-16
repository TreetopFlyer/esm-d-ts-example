// @ts-check
import { html } from "html";
import { Provide, Consume } from "./store.js";

const Deep = () =>
{
    const [State, Dispatch] = Consume();
    return html`
    <div>
        <p>Previous: ${State.Previous.Key} | ${State.Previous.Ind}</p>
        <p>Current:  ${State.Current.Key} | ${State.Current.Ind}</p>
    </div>`;
};

const Log = () => 
{
    const [State, Dispatch] = Consume();

    /** @type {(i:number)=>({background:string})} */
    const colorize = inIndex => ({background: inIndex==State.Current.Ind ? "red" : "none"});
    return html`
    <ol>
        ${State.History.map((h, i)=>html`
        <li style=${ colorize(i) } onClick=${ ()=>Dispatch({Type:"pick", Payload:i}) }>
            ${ h }
        </li>`)}
    </ol>`;
};

const Add = () =>
{
    const [State, Dispatch] = Consume();
    /** @type {Store.Actions} */
    const action = {Type:"push", Payload:`Page-${Math.floor(Math.random()*1000)}`};
    return html`
    <button onClick=${()=>Dispatch(action)}>
        add random
    </button>`;
};

export default html`
    <${Provide}>
        <div>
            <h1>History!</h1>
            <${Add}//>
            <${Deep}//>
            <${Log}//>
        </div>
    <//>
`;