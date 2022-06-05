import { createRoot } from "react-dom/client";
import NotesApp from "./NotesApp";

import './style/global.css'

const root = createRoot(document.getElementById("root"));

root.render(<NotesApp></NotesApp>);
