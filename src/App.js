import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonorRegister from './DonorRegister/DonorRegister.react';
import PatientRegister from './PatientRegister/PatientRegister.react';

function App() {
  return (
    <div>
     <DonorRegister></DonorRegister>
     {/* <PatientRegister/> */}
    </div>
  );
}

export default App;
