import {useReducer} from "react"


const reducer = (state, action) => {
  if (action.type === 'buy-ingredients') return {money:state.money -10};
  if (action.type ==='sell-a-meal') return {money: state.money + 10};
  if (action.type ==="celebrity-visit")
}

function App() {
  

  return (
    <>
     
    </>
  )
}

export default App
