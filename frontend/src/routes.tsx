// Third party
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Projects
import { Home } from "./containers/Home";
import { NewRoom } from "./containers/NewRoom";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </Switch>
    </BrowserRouter>
  )
}