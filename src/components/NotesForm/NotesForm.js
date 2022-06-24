import React from "react";
import "./style.css";

class NotesForm extends React.Component {
  render() {
    return (
      <div className="noteform-container flex ver-center hor-center">
        <div className="noteform flex flex-col ver-center hor-center">
          <h1>Add your note here🗒️</h1>
          <input placeholder="Note Title" className="noteform-title" name="title" onChange={this.props.onChangeHandler} value={this.props.notesTitle}></input>
          <textarea
            placeholder="fill it with your ideas ✨"
            className="noteform-desc"
            name="body"
            onChange={this.props.onChangeHandler}
            value={this.props.notesDesc}
          ></textarea>
          <button className="noteform-button" onClick={this.props.saveNote}>Save</button>
        </div>
      </div>
    );
  }
}

export default NotesForm;
