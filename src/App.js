import "./App.css";
import { connect } from "react-redux";
import { updateUser } from "./actions/userAction";

function App() {
  return <div className="App">APP COMP</div>;
}
const mapStateToProps = (state) => {
  return state;
};
const mapDispatchToProps = {
  updateUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
