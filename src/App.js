import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import MainContent from './components/MainContent'

function App() {

    const menuItems = ['Home', 'Documentation', "About", "Contact"];

    const displayText = (btn) => {
        console.log(`${btn} has been clicked`)
    }
  return (
    <div className="App">
      <Header action={displayText} menuItems={menuItems} />
      <Hero action={displayText} />
      <MainContent />
      <Footer menuItems={menuItems} />
    </div>
  );
}

export default App;
