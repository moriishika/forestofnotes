import React from "react";
import Note from "./Note";

class Notes extends React.Component{
    render(){
        return (
            <div>
                <h1>Here is the place for notes container</h1>
                <Note></Note>
            </div>
        )
    }
}

export default Notes;