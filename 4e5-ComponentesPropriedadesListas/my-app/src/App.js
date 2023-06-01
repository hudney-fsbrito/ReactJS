import React, { useEffect, useState } from 'react';
import Header from './Header'
import Counter from './Counter'
import './App.css';

function App() {

  let time = 0;
  const [show, setShow] = useState(true)

  useEffect(()=>{
    let timer = setInterval(()=>{
      time++;
      console.log(time);
      if (time > 5) {
        clearInterval(timer)  
        setShow(false)    
      }
  
    }, 1000)

  }, [])

  if (show) {
    return (
      <div>
        <Header name="Hudney" links={[ "Sobre","Comprar","Contato","Login" ]}></Header>
        <Counter count={0}></Counter>
      </div>
    );
  } else {
    return (
      <div>
        <Header name="Hudney" links={[ "Sobre","Comprar","Contato","Login" ]}></Header>
       Counter Não tem mais contagem
      </div>
    );
  }

}

export default App;
