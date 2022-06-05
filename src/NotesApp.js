import React from "react";
import { NavigationBar, Notes, NotesForm } from "./components";

class NotesApp extends React.Component {
  render() {
    return (
      <>
        <NavigationBar></NavigationBar>
        <NotesForm></NotesForm>
        <Notes></Notes>
      </>
    );
  }
}

export default NotesApp;
