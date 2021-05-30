import "bulmaswatch/superhero/bulmaswatch.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1 style={{ textAlign: "center", fontSize: "50px" }}>
          <b>JavaScript Book</b>
        </h1>
        <h3 style={{ textAlign: "center", fontSize: "30px" }}>
          Create your own javascript cheatsheets
        </h3>
        <CellList />
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
