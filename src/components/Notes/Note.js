import React from "react";

const deleteNote = (id) => {

}

const archiveNote = (id) => {

}
class Note extends React.Component{
    render(){
        const {id, title, createdAt, body} = this.props.noteData;
        return (
            <div className="note flex flex-col">
                <h2 className="note-title">{title}</h2>
                <h3 className="note-date">{createdAt}</h3>
                <p className="note-desc">{body}</p>
                <div className="flex flex-between">
                    <button className="note-delete-button note-button" onClick={() => deleteNote(id)}>🗑️</button>
                    <button className="note-archive-button note-button" onClick={() => archiveNote(id)}>📌</button>
                </div>
            </div>
        )
    }
}

export default Note;