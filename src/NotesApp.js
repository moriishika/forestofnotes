import React, { Fragment } from "react";
import { NavigationBar, Notes, NotesForm } from "./components";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notesData: [],
      isStorageSupported: false,
      notesForm: { title: "", desc: "", status: "active" },
      searchValue: "",
    };
    this.storageKey = "NOTES_DATA";
    this.getNotesData = this.getNotesData.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.searchNotesHandler = this.searchNotesHandler.bind(this);
    this.changeNoteStatus = this.changeNoteStatus.bind(this);
  }

  getNotesData() {
    // check if the Storage API is not available in the browser
    if (typeof Storage !== null) {
      if (localStorage.getItem(this.storageKey)) {
        let notesData = JSON.parse(localStorage.getItem(this.storageKey));
        this.setState({
          notesData,
          isStorageSupported: true,
        });
      } else {
        this.setState({
          notesData: [],
          isStorageSupported: true,
        });
      }
    }
  }

  componentDidMount() {
    this.getNotesData();
  }

  saveNote() {
    //creating a new note object
    const newNote = {
      id: Date.now(),
      title: this.state.notesForm.title,
      desc: this.state.notesForm.desc,
      createdAt: Date.now(),
      status: this.state.notesForm.status,
    };

    this.setState((previousNotes) => {
      return {
        //add it as the last element 
        notesData: [...previousNotes.notesData, newNote],
      };
    });

    //save the note to localstorage
    localStorage.setItem(
      this.storageKey,
      JSON.stringify([...this.state.notesData, newNote])
    );
  }

  changeNoteStatus(statusName, noteId) {
    let updatedNotes = this.state.notesData.map((note) => {
      // if it has the same id then the note status will change
      if (note.id === noteId) {
        note.status = statusName;
        return note;
      }
      return note;
    });

    // set the new mapped array into the state
    this.setState({
      notesData: updatedNotes,
    });

    // save the updated note it to the localstorage
    localStorage.setItem(this.storageKey, JSON.stringify(updatedNotes));
  }

  deleteNote(id) {

    // filter note who does not have the same id
    let filteredNotes = this.state.notesData.filter((note) => note.id !== id);

    // replaced it with the filtered notes array into the state
    this.setState({ notesData: filteredNotes });

    //save it to the localstorage
    localStorage.setItem(this.storageKey, JSON.stringify(filteredNotes));
  }

  searchNotesHandler({ target }) {
    this.setState({ searchValue: target.value });
  }

  onChangeHandler({ target }) {
    //check if the title input has reached to 50 characters
    if (this.state.notesForm.title.length > 50) {
      // reassign the value property so it will not rendered with the current state
      target.value = this.state.notesForm.title;
      return;
    }

    this.setState({
      notesForm: { ...this.state.notesForm, [target.name]: target.value },
    });
  }

  render() {
    return (
      <>
        <NavigationBar searchNotes={this.searchNotesHandler}></NavigationBar>
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
              searchInput={this.state.searchValue}
            ></Notes>
            <Notes
              notesCategory="archived"
              notesCategoryTitle="Archived Notes"
              notes={this.state.notesData}
              changeNoteStatus={this.changeNoteStatus}
              deleteNote={this.deleteNote}
              searchInput={this.state.searchValue}
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
