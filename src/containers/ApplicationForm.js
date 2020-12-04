import React from 'react';
import Input from '../components/input';
import '../css/forms.css'

const ApplicationForm = () => {
  return (
    <div className="form-container">
      <Input type="number" label="Enter Amount" handleInputValue={(e) => console.log(e.target.value)}/>
    </div>
  )
}

export default ApplicationForm