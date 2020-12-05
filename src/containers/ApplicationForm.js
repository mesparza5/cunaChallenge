import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {connect} from 'react-redux';
import '../css/forms.css'

const ApplicationForm = (props) => {
  return (
    <div className="form-container">
      <Input 
        type="number" 
        label="Auto Purchase Price" 
        handleInputValue={(e) => console.log(e.target.value)}
        value={props.autoPrice} 
        />
      <Input 
        label="Auto Make" 
        handleInputValue={(e) => console.log(e.target.value)}
        value={props.autoMake}
        />
      <Input 
        label="Auto Model" 
        handleInputValue={(e) => console.log(e.target.value)}
        value={props.autoModel}
        />
      <Input 
        type="number" 
        label="User Estimated Yearly Income" 
        handleInputValue={(e) => console.log(e.target.value)}
        value={props.userIncome}
        />
      <Input 
        type="number" 
        label="User Estimated Credit Score" 
        handleInputValue={(e) => console.log(e.target.value)}
        value={props.userCreditScore}
        />
      <div>
        <Button label="Reset Form" onClickEvent={() => console.log('clicked!')}/>
        <Button label="Submit Application" buttonStyle="success" onClickEvent={() => console.log('clicked!')}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    autoPrice: state.formReducer.autoPrice,
    autoMake: state.formReducer.autoMake,
    autoModel: state.formReducer.autoModel,
    userIncome: state.formReducer.userIncome,
    userCreditScore: state.formReducer.userCreditScore
  }
}

export default connect(mapStateToProps)(ApplicationForm);