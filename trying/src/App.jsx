import {useReducer} from "react"


const reducer = (state, action) => {
  if (action.type === 'buy-ingredients') return {money:state.money -10};
  if (action.type ==='sell-a-meal') return {money: state.money + 10};
  if (action.type ==="celebrity-visit") return {money:state.money+500};
  return state;
}

function App() {
  const initialstate ={money: 100};
  const [state,dispatch] = useReducer(reducer,initialstate);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'buy-ingredients'})}>Shopping for veggies!</button>
        <button onClick={() => dispatch({type: 'sell-a-meal'})}>Serve a meal to the customer</button>
      </div>
    </div>
  );
}

export default App
