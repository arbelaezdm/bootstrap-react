import "./App.css";
import React from 'react';
import { Route, Routes } from "react-router-dom";
import File1 from './components/File1';
import FormControl from './components/FormControl';
import NotFound from './components/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/file1" element={<File1 />}/>
      <Route path="/form-control" element={<FormControl />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
