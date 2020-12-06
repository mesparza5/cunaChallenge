export const processForm = (data) => {

}

export const validateEmptyField = (field) => {
  if (!field) {
    return 'Input field cannot be empty.';
  } 
}

export const validateFieldNumber = (field) => {
  if (!field.match(/^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/)) {
    return 'Input field is not a valid number.';
  } 
}

export const validateFieldCreditScoreRange = (field) => {
  if (!field.match(/([3-7][0-9]{2}|8[0-4][0-9]|850)/)) {
    return 'Invalid Credit Score. Must be between 300 and 850.';
  }
}