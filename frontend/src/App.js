import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStudent from "./components/add-student.component";
import StudentsList from "./components/students-list.component";
import NavbarComponent from "./components/navbar.component";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent/> 
          <Routes>
            <Route path="/" element={<StudentsList />} />
            <Route path="/add" element={<AddStudent />} />
          </Routes>
       
      </div>
    );
  }
}

export default App;