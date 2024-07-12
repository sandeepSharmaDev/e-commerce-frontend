import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';

const App = () => {
  return (
   <>
   <div>
   <Navbar />

   <Container>
     <h1>Welcome to React App</h1>
   </Container>

   <Footer />

   </div>


  
   
   </>
  )
}

export default App
