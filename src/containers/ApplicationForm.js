import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {setProcessing} from '../actions/application';
import {
  addAutoPrice, 
  addAutoMake, 
  addAutoModel, 
  addUserIncome, 
  addUserCreditScore 
} from '../actions/form';

import '../css/forms.css'


const ApplicationForm = (props) => {
  const resetValues = () => {
    props.addAutoPrice(0);
    props.addAutoModel('');
    props.addAutoMake('');
    props.addUserIncome(0);
    props.addUserCreditScore(0);
  };

  return (
    <div className="form-container">
      <Input 
        type="number" 
        label="Auto Purchase Price" 
        handleInputValue={(e) => props.addAutoPrice(e.target.value)}
        value={props.autoPrice} 
        />
      <Input 
        label="Auto Make" 
        handleInputValue={(e) => props.addAutoMake(e.target.value)}
        value={props.autoMake}
        />
      <Input 
        label="Auto Model" 
        handleInputValue={(e) => props.addAutoModel(e.target.value)}
        value={props.autoModel}
        />
      <Input 
        type="number" 
        label="User Estimated Yearly Income" 
        handleInputValue={(e) => props.addUserIncome(e.target.value)}
        value={props.userIncome}
        />
      <Input 
        type="number" 
        label="User Estimated Credit Score" 
        handleInputValue={(e) => props.addUserCreditScore(e.target.value)}
        value={props.userCreditScore}
        />
      <div>
        <Button label="Reset Form" onClickEvent={() => resetValues() }/>
        <Button label="Submit Application" buttonStyle="success" onClickEvent={() => console.log('clicked!')}/>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    autoPrice: state.formReducer.autoPrice,
    autoMake: state.formReducer.autoMake,
    autoModel: state.formReducer.autoModel,
    userIncome: state.formReducer.userIncome,
    userCreditScore: state.formReducer.userCreditScore,
    isProcessing: state.applicationReducer.isProcessing,
  }
};

const mapDispatchToProps = (dispach) => {
  return {
    addAutoPrice: (payload) => dispach(addAutoPrice(payload)),
    addAutoMake: (payload) => dispach(addAutoMake(payload)),
    addAutoModel: (payload) => dispach(addAutoModel(payload)),
    addUserIncome: (payload) => dispach(addUserIncome(payload)),
    addUserCreditScore: (payload) => dispach(addUserCreditScore(payload)),
    setProcessing: (payload) => dispach(setProcessing(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);