import React from "react";
import Button from "./Button";
import './Header.css'

export default function Headers() {
    return (
        <header>
            <h1>LOGO</h1>
            <div className="right">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Button/>
            </div>
        </header>
    )
}