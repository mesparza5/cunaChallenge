import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import '../css/forms.css'

const ApplicationForm = () => {
  return (
    <div className="form-container">
      <Input type="number" label="Auto Purchase Price" handleInputValue={(e) => console.log(e.target.value)}/>
      <Input label="Auto Make" handleInputValue={(e) => console.log(e.target.value)}/>
      <Input label="Auto Model" handleInputValue={(e) => console.log(e.target.value)}/>
      <Input type="number" label="User Estimated Yearly Income" handleInputValue={(e) => console.log(e.target.value)}/>
      <Input type="number" label="User Estimated Credit Score" handleInputValue={(e) => console.log(e.target.value)}/>
      <div>
        <Button label="Reset Form" onClickEvent={() => console.log('clicked!')}/>
        <Button label="Submit Application" buttonStyle="success" onClickEvent={() => console.log('clicked!')}/>
      </div>
    </div>
  )
}

export default ApplicationForm