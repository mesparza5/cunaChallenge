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
      <section className="disclaimer">
        <p>
          <b>Terms & Conditions</b> <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
    </div>
  );
}

export default App;
