// import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Pro from './component/pro';
import React, { useState } from 'react';


function App() {
  const [Mode, setMode] = useState('light');
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      // console.log("light")
      document.body.style.backgroundColor = '#09477df2';
    }
    else {
      setMode('light');
      // console.log("dark")
      document.body.style.backgroundColor = 'white';
    }
  };
  return (

    <>

      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode}/>
      <Pro toggleMode={toggleMode} mode={Mode} />



    </>

  );
}

export default App;
