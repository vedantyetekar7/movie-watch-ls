import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header.js";
import { WatchList } from "./components/WatchList.js";
import { Watched } from "./components/Watched.js";
import { Add } from "./components/Add.js";
import "./lib/font-awesome/css/all.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <WatchList />
          </Route>
          <Route path="/watched">
            <Watched />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
