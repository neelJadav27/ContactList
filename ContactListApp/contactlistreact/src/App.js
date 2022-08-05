import logo from "./logo.svg";

import React from "react";
import { Routes, Route } from "react-router-dom";
import List from "./list";
import ContactDetails from "./contactDetails";
import AddContact from "./AddContact";
export class App extends React.Component {
  render() {
    return (
      <Routes>
        <Route exact path="/" element={<List />}></Route>
        <Route
          exact
          path="/contactDetails/:info"
          element={<ContactDetails />}
        ></Route>
        <Route exact path="/addContact" element={<AddContact />}></Route>
      </Routes>
    );
  }
}

export default App;
