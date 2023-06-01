import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from "react";
import Header from "./components/app-header/header";
import Main from "./components/app-main/Main";
import Footer from "./components/app-footer/footer";
// import data from './mock.json'

function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Main tasks={tasks} setTasks={setTasks} />
        <Footer tasks={tasks} />
      </div>
    </BrowserRouter>
  );
 
}

// window.localStorage.clear();
export default App;
