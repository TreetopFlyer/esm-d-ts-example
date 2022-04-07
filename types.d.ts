namespace Store
{
    type HistoryItem = string
    type History = Array<HistoryItem>
    type Position = { Key: HistoryItem, Ind: number }
    type State =
    {
        History: History,
        Current: Position,
        Previous: Position
    }
    type Actions
    = { Type:"push", Payload:HistoryItem }
    | { Type:"pick", Payload:number }
    type Reducer = (inState:State, inAction:Actions) => State
    type Dispatcher = (inAction:Actions)=>void
    type Binding = [ State, Dispatcher ];
}

module "html"
{
    const html:any
}