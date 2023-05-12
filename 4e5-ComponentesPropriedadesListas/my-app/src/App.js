import React from 'react';
import Header from './Header'
import './App.css';

function App() {
  return (
    <Header name="Hudney" links={["Sobre","Comprar","Contato","Login"]}></Header>
  );
}

export default App;
