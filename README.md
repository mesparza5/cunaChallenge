# CUNA AutoLoan App Challenge

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 


In the project directory, you can run:

### `yarn start` or `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes. Your app is ready to be deployed.  
  
  
# Documentation

## Components

### Input Component
The `<Input />` component can be imported with 
```
import Input from './components/Input'
```
The component uses the following props
Prop | Type | Description
------------ | ------------- | -------------
type | `string` | Options are 'text' for text field inputs and 'number' for number field inputs. If not defined it defualts to 'text'
label | `string` | Required. This prop creates the label for the input.
handleInputValue | `function` | Handles onChange events and passes the field value as a prop.
value | `string` | Sets the value for the input. If not defined it defaults to empty string.
errMsg | `string` | Displays error message. If empty will not display any error.
placeholder | `string` | Displays placeholder text. 
Example:
```
<Input label="This is a label" handleInputValue={()=> //Do Something} />
```
### Button Component
The `<Button />` component can be imported with 
```
import Input from './components/Button'
```
The component uses the following props
Prop | Type | Description
------------ | ------------- | -------------
buttonStyle | `string` | Options are 'success', 'danger' and 'default'. These options specify the color and style of the button. If none is passed it defaults to 'default'
label | `string` | Required. This prop creates the label for the button.
onClickEvent | `function` | Handles onClick event and passes event as a prop.

Example:
```
<Button label="This is a label" buttonStyle="success" onClickEvent={()=> //Do Something} />
```