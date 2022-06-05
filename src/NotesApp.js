import React from "react";
import { Notes, NotesForm } from "./components";

class NotesApp extends React.Component {
  render() {
    return (
      <>
        <NotesForm></NotesForm>
        <Notes></Notes>
      </>
    );
  }
}

export default NotesApp;
