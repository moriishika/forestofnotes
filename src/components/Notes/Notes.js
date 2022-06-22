import React from "react";
import Note from "./Note";

import "./style.css";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes() {
    let notes = [];
    
    this.props.notes.forEach((note) => {
      if (this.props.notesCategory === note.status) {
        notes.push(
          <Note
            key={note.id}
            noteData={note}
            changeNoteStatus={this.props.changeNoteStatus}
            deleteNote={this.props.deleteNote}
          ></Note>
        );
      }
    });

    if (!notes.length) {
      return <h1>Tidak ada notes 😢</h1>;
    } else {
      return notes;
    }
  }

  render() {
    return (
      <div className="notes-container flex flex-col hor-center ver-center flex-wrap">
        <h1 className="notes-title">{this.props.notesCategoryTitle}</h1>
        <div className="notes flex flex-wrap">{this.renderNotes()}</div>
      </div>
    );
  }
}

export default Notes;
