import React, {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Approved = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [userErr, setUserErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [passErr2, setPassErr2] = useState('');


  const emailIsValid = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.toLowerCase())
  }
  const validateEmail = (value) => {
    if (emailIsValid(value)) {
      setUserErr('');
    } else {
      setUserErr('Invalid Username. Username must be an email.');
    }
    setUsername(value);
  }

  const validatePassword = (value) => {
    if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
      return 'Password must be 8 characters long and include at least one number and one special character. '
    }
  }
  
  const checkForm = () => {
    const errorMsg = 'Input field cannot be empty.';
    let passedCheck = true;

    if (!username || username === '') {
      setUserErr(errorMsg);
      passedCheck = false;
    }

    if (!password) {
      setPassErr(errorMsg);
      passedCheck = false;
    }

    if (!password2) {
      setPassErr2(errorMsg);
      passedCheck = false;
    }
    return passedCheck;
  }

  return (
    <div className="new-account-container">
      <h1>Congratulations! <small>You have been pre-approved.</small></h1>
      <p>To continue please create a new account.</p>

      <div className="register form-container">
        <Input 
          label="Username" 
          value={username} 
          handleInputValue={e => validateEmail(e.target.value)}
          placeholder="Username must be an email. i.e.: john@doe.com"
          errorMsg={userErr}
        />
        <Input
          label="Password" 
          value={password}
          type="password"
          handleInputValue={(e) => {
            const value = e.target.value;
            setPassword(value)
            if (validatePassword(value)) {
              setPassErr(validatePassword(value));
            } else {
              setPassErr('');
            }
          }}
          errorMsg={passErr}
        />
        <Input
          label="Re-enter Password" 
          value={password2}
          type="password"
          handleInputValue={(e) => {
            const value = e.target.value;
            setPassword2(value)
            if (validatePassword(value)) {
              setPassErr2(validatePassword(value));
            } else if (password !== value) {
              setPassErr2('Password is not matching.')
            } else {
              setPassErr2('');
            }
          }}
          errorMsg={passErr2}
        />
        <div>
          <Button 
            label="Cancel Application"
            buttonStyle="danger"
            onClickEvent={props.handleClick}
          />
          <Button 
            label="Create Account" 
            buttonStyle="success"
            onClickEvent={() => {
              if (checkForm()) {
                alert('Account Created!');
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Approved;