import React from "react";
import './Main.css'
import Button from "./Button";

export default function Main() {
    return (
        <main>
            <div className="bg-cont">
            <div className="text">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <Button/>
            </div>
            <div className="text">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <Button/>
            </div>
            <div className="text">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <Button/>
            </div>
            </div>
        </main>
    )
}