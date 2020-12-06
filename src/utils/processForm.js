export const processForm = (price, income, creditScore) => {
  return new Promise((resolve, reject) => {
    if ((income/5 >= price) && (creditScore >= 600) && (price < 1000000)) {
      resolve('APPROVED')
    } else {
      reject('BAD_REQUEST')
    }
  })
}

export const validateEmptyField = (field) => {
  if (!field) {
    return 'Input field cannot be empty.';
  } 
}

export const validateFieldNumber = (field) => {
  // eslint-disable-next-line no-useless-escape
  if (!field.match(/^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/)) {
    return 'Input field is not a valid number.';
  } 
}

export const validateFieldCreditScoreRange = (field) => {
  if (!field.match(/^0*([3-7][0-9]{2}|8[0-4][0-9]|850)$/)) {
    return 'Invalid Credit Score. Must be between 300 and 850.';
  }
}