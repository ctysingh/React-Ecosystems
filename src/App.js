import React from "react";
import {hot} from "react-hot-loader";
import Todolist from "./Todos/Todolist";
import './App.css'

const App = ()=> (
    <div className="App">
       <Todolist></Todolist>
    </div>
    
)

export default hot(module) (App);