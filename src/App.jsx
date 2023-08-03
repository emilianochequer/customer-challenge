import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CustomerCustomerProcess from "./pages/CustomerCustomerProcess/CustomerCustomerProcess.jsx";
import CustomerSearchProcess from "./pages/CustomerSearchProcess/CustomerSearchProcess.jsx";
import { Card } from "react-bootstrap";
import { useAppContext } from "./context/AppContext";

function App() {
  const { searchResult } = useAppContext();
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Card>
            <CustomerSearchProcess />
          </Card>
        </Route>
        <Route path="/customerInfo/:custId">
          <Card>
            <h4>
              Search Customer{" "}
              <b>
                {searchResult.Fname} {searchResult.Lname}
              </b>
            </h4>
          </Card>
          <Card>
            <CustomerCustomerProcess />
          </Card>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
