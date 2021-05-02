import "./App.css";
import { createStore } from "redux";

function reducer(state, action) {
  console.log("Paramater Action=>", action);
  if (action.type === "changeTheState") {
    return action.payload.newState;
  }
  return "StateX";
}

const myStore = createStore(reducer);
console.log("myStore.getState()=>", myStore.getState());

const action = {
  type: "changeTheState",
  payload: { newState: "My new state" },
};

myStore.dispatch(action);
console.log("myStore.getState()=>", myStore.getState());

function App() {
  return <div className="App">APP COMP..</div>;
}

export default App;
