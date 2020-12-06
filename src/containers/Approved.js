import React, {useState} from 'react';

const Approved = () => {
  const [username, setUsername] = useState('')
  return (
    <div className="new-account-container">
      <h1>Congratulations! <small>You have been pre-approved.</small></h1>
      <p>To continue please create a new account.</p>
    </div>
  )
}

export default Approved;