import React, { Fragment } from "react";
import { NavigationBar, Notes, NotesForm } from "./components";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesData: [],
      isStorageSupported: false,
      notesForm: { title: "", desc: "", status: "active" },
    };
    this.storageKey = "NOTES_DATA";
    this.getNotesData = this.getNotesData.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.changeNoteStatus = this.changeNoteStatus.bind(this);
  }

  getNotesData() {
    if (typeof Storage !== null) {
      if (localStorage.getItem(this.storageKey)) {
        let notesData = JSON.parse(localStorage.getItem(this.storageKey));
        this.setState({
          notesData,
          isStorageSupported: true,
        });
      } else {
        console.log("hello");
        this.setState({
          notesData: [],
          isStorageSupported: true,
        });
      }
    }
  }

  saveData() {}

  componentDidMount() {
    this.getNotesData();
    console.log(this.state);
  }

  saveNote() {
    const newNote = {
      id: Date.now(),
      title: this.state.notesForm.title,
      desc: this.state.notesForm.desc,
      createdAt: Date.now(),
      status: this.state.notesForm.status,
    };
    this.setState((previousNotes) => {
      return {
        notesData: [...previousNotes.notesData, newNote],
      };
    });

    localStorage.setItem(
      this.storageKey,
      JSON.stringify([...this.state.notesData, newNote])
    );
  }

  // updateNote() {
  //   this
  // }

  changeNoteStatus(statusName, noteId) {
    let updatedNotes = this.state.notesData.map((note) => {
      if (note.id === noteId) {
        note.status = statusName;
        return note;
      }
      return note;
    });


    this.setState({
      notesData : updatedNotes
    });

    localStorage.setItem(this.storageKey, JSON.stringify(updatedNotes));

  }

  deleteNote(id){
    let filteredNotes = this.state.notesData.filter((note) => note.id !== id);

    this.setState({notesData : filteredNotes});

    localStorage.setItem(this.storageKey, JSON.stringify(filteredNotes));
  }

  searchNotes() {
    this.state.notesData.includes()
  }

  onChangeHandler({ target }) {
    this.setState({
      notesForm: { ...this.state.notesForm, [target.name]: target.value },
    });
  }

  render() {
    return (
      <>
        <NavigationBar></NavigationBar>
        <NotesForm
          saveNote={this.saveNote}
          onChangeHandler={this.onChangeHandler}
          noteTitle={this.state.notesForm.title}
          noteDesc={this.state.notesForm.desc}
          noteStatus={this.state.notesForm.status}
        ></NotesForm>
        {!this.state.isStorageSupported && (
          <h1>This browser does not support the Storage API 😢</h1>
        )}
        {this.state.isStorageSupported && (
          <Fragment>
            <Notes
              notesCategory="active"
              notesCategoryTitle="Active Notes"
              notes={this.state.notesData}
              changeNoteStatus={this.changeNoteStatus}
              deleteNote={this.deleteNote}
            ></Notes>
            <Notes
              notesCategory="archived"
              notesCategoryTitle="Archived Notes"
              notes={this.state.notesData}
              changeNoteStatus={this.changeNoteStatus}
              deleteNote={this.deleteNote}
            ></Notes>
          </Fragment>
        )}
        <footer className="text-bold">
          Copyright ©2022 | Created by Nox Vanitas
        </footer>
      </>
    );
  }
}

export default NotesApp;
