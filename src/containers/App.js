import React from 'react';
import '../css/App.css';
import ApplicationForm from './ApplicationForm';
import Header from './Header';

const App = () => {
  return (
    <div className="App">
      <Header /> 
      <section className="container">
        <ApplicationForm />
      </section>
    </div>
  );
}

export default App;
