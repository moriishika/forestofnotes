import React from "react";

import './style.css';

class NavigationBar extends React.Component{
    render(){
        return (
            <div className="navigationBar flex flex-between ver-center">
                <h1>Forest of Notes 🏕️</h1>
                <div>
                    <input type="text" placeholder="Search Notes"></input>
                </div>
            </div>
        );
    }
}

export default NavigationBar;