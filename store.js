// @ts-check
import { createContext, createElement, useContext, useReducer } from "react";

// @ts-ignore
/** @typedef {import("./types.d")} Store */

const Context = createContext(null);

/** @type {Store.HistoryItem} InitialHistory */
const InitialHistory = "bedrock";

/** @type {Store.State} */
const State = {
    History: [ InitialHistory ],
    Current: { Key: InitialHistory, Ind: 0 },
    Previous: { Key: InitialHistory, Ind: 0 }
};

/** @type {Store.Reducer} */
const Reducer = (inState, inAction) =>
{
    switch(inAction.Type)
    {
        case "push" :
            return {
                History: [ inAction.Payload, ...inState.History.slice(inState.Current.Ind) ],
                Previous: inState.Current,
                Current: { Key: inAction.Payload, Ind: 0 }
            };
        case "pick" :
            if(inAction.Payload == inState.Current.Ind) break;
            if(inAction.Payload < 0) inAction.Payload = 0;
            if(inAction.Payload > inState.History.length-1 ) inAction.Payload = inState.History.length-1;
            return {
                History: [...inState.History],
                Previous: inState.Current,
                Current: { Key: inState.History[inAction.Payload], Ind: inAction.Payload }
            }; 
    }
    return inState;
};

export const Provide = ({children}) => createElement(Context.Provider, {value:useReducer(Reducer, State)}, children);

/** @type {()=>Store.Binding} */
export const Consume = () => useContext(Context);