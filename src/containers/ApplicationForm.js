import React, { useCallback } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import {connect} from 'react-redux';
import {setProcessing} from '../actions/application';
import _ from 'lodash'
import {
  validateEmptyField, 
  validateFieldNumber, 
  validateFieldCreditScoreRange
} from '../utils/processForm';
import {
  addAutoPrice,
  addAutoMake,
  addAutoModel,
  addUserIncome,
  addUserCreditScore,
  addAutoPriceErr,
  addAutoMakeErr,
  addAutoModelErr,
  addUserIncomeErr,
  addUserCreditScoreErr,
} from '../actions/form';

import '../css/forms.css'


const ApplicationForm = (props) => {
  const resetValues = () => {
    props.addAutoPrice(0);
    props.addAutoModel('');
    props.addAutoMake('');
    props.addUserIncome(0);
    props.addUserCreditScore(0);
    props.addAutoPriceErr('');
    props.addAutoModelErr('');
    props.addAutoMakeErr('');
    props.addUserIncomeErr('');
    props.addUserCreditScoreErr('');
  };
  const checkUserCS = (value) => {
    console.log(value);
    const checkEmptyValues = validateEmptyField(value);
    const checkNumber = validateFieldNumber(value);
    const checkCreditScoreRange = validateFieldCreditScoreRange(value);
    if (checkEmptyValues) {
      props.addUserCreditScoreErr(checkEmptyValues);
      props.addUserCreditScore('');
    } else if (checkNumber) {
      props.addUserCreditScoreErr(checkNumber);
      props.addUserCreditScore(value);
    } else if (checkCreditScoreRange) {
      props.addUserCreditScoreErr(checkCreditScoreRange);
      props.addUserCreditScore(value);
    } else {
      props.addUserCreditScoreErr('');
      props.addUserCreditScore(value);
    }
  }

  const debounceCheckUserCS = useCallback(
    _.debounce(value => checkUserCS(value), 500), []
  )

  return (
    <div className="form-container">
      <Input 
        type="number" 
        label="Auto Purchase Price" 
        handleInputValue={(e) => {
          const value = e.target.value;
          const checkEmptyValues = validateEmptyField(value);
          const checkNumber = validateFieldNumber(value);
          if (checkEmptyValues) {
            props.addAutoPriceErr(checkEmptyValues);
            props.addAutoPrice('');
          } else if (checkNumber) {
            props.addAutoPriceErr(checkNumber);
            props.addAutoPrice(value);
          } else {
            props.addAutoPriceErr('');
            props.addAutoPrice(value);
          }
        }}
        value={props.autoPrice}
        errorMsg={props.autoPriceErr}
        />
      <Input 
        label="Auto Make" 
        value={props.autoMake}
        errorMsg={props.autoMakeErr}
        handleInputValue={(e) => {
          const value = e.target.value;
          const checkEmptyValues = validateEmptyField(value);
          if (checkEmptyValues) {
            props.addAutoMakeErr(checkEmptyValues);
            props.addAutoMake('');
          } else {
            props.addAutoMakeErr('');
            props.addAutoMake(value);
          }
        }}
        />
      <Input 
        label="Auto Model" 
        value={props.autoModel}
        errorMsg={props.autoModelErr}
        handleInputValue={(e) => {
          const value = e.target.value;
          const checkEmptyValues = validateEmptyField(value);
          if (checkEmptyValues) {
            props.addAutoModelErr(checkEmptyValues);
            props.addAutoModel('');
          } else {
            props.addAutoModelErr('');
            props.addAutoModel(value);
          }
        }}
        />
      <Input 
        type="number" 
        label="User Estimated Yearly Income" 
        value={props.userIncome}
        errorMsg={props.userIncomeErr}
        handleInputValue={(e) => {
          const value = e.target.value;
          const checkEmptyValues = validateEmptyField(value);
          const checkNumber = validateFieldNumber(value);
          if (checkEmptyValues) {
            props.addUserIncomeErr(checkEmptyValues);
            props.addUserIncome('');
          } else if (checkNumber) {
            props.addUserIncomeErr(checkNumber);
            props.addUserIncome(value);
          } else {
            props.addUserIncomeErr('');
            props.addUserIncome(value);
          }
        }}
        />
      <Input 
        type="number" 
        label="User Estimated Credit Score" 
        value={props.userCreditScore}
        errorMsg={props.userCreditScoreErr}
        handleInputValue={(e) => {
          props.addUserCreditScore(e.target.value);
          debounceCheckUserCS(e.target.value);
        }}
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
    autoPriceErr: state.formReducer.autoPriceErr,
    autoMakeErr: state.formReducer.autoMakeErr,
    autoModelErr: state.formReducer.autoModelErr,
    userIncomeErr: state.formReducer.userIncomeErr,
    userCreditScoreErr: state.formReducer.userCreditScoreErr,
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
    addAutoPriceErr: (payload) => dispach(addAutoPriceErr(payload)),
    addAutoMakeErr: (payload) => dispach(addAutoMakeErr(payload)),
    addAutoModelErr: (payload) => dispach(addAutoModelErr(payload)),
    addUserIncomeErr: (payload) => dispach(addUserIncomeErr(payload)),
    addUserCreditScoreErr: (payload) => dispach(addUserCreditScoreErr(payload)),
    setProcessing: (payload) => dispach(setProcessing(payload)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationForm);