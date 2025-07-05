import SignUp from './SignUp'
import Login from './Login';
import { useState } from 'react'; 
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <SignUp />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
