import React from "react";
import Note from "./Note";

import "./style.css";

// const dummyNotes = [
//   {
//     id: 1,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 2,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 3,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 4,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 5,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 6,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
//   {
//     id: 7,
//     title: "Babel",
//     body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
//     archived: false,
//     createdAt: "2022-04-14T04:27:34.572Z",
//   },
// ];

class Notes extends React.Component {
  constructor(props){
    super(props)
    this.renderNotes = this.renderNotes.bind(this);
  }
  renderNotes(){
    this.props.notes.map((note) => {

    })
  }
  render() {
    return (
      <div className="notes-container flex flex-col hor-center ver-center flex-wrap">
        <h1 className="notes-title">{this.props.notesCategoryTitle}</h1>
       
        <div className="notes flex flex-wrap">
          {this.props.notes.map((note) => {
            if (this.props.notesCategory === note.status) {
              return <Note key={note.id} noteData={note}></Note>;
            }
          })}
        </div>
      </div>
    );
  }
}

export default Notes;
