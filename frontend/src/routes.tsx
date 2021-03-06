// Third party
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Projects
import { Home } from "./containers/Home";
import { NewRoom } from "./containers/NewRoom";
import { AdminRoom } from "./containers/admin/Rooms";
import { Rooms } from "./containers/Rooms";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" exact component={NewRoom} />
        <Route path="/rooms/admin/:id" component={AdminRoom} />
        <Route path="/rooms/:id" component={Rooms} />
      </Switch>
    </BrowserRouter>
  )
}