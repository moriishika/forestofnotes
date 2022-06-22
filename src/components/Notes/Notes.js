import React from "react";
import Note from "./Note";

import "./style.css";

class Notes extends React.Component {
  render() {
    return (
      <div className="notes-container flex flex-col hor-center ver-center flex-wrap">
        <h1 className="notes-title">{this.props.notesCategoryTitle}</h1>
       
        <div className="notes flex flex-wrap">
          {this.props.notes.map((note) => {
            if (this.props.notesCategory === note.status) {
              return <Note key={note.id} noteData={note} changeNoteStatus={this.props.changeNoteStatus} deleteNote={this.props.deleteNote}></Note>;
            }
            return null;
          })}
        </div>
      </div>
    );
  }
}

export default Notes;
