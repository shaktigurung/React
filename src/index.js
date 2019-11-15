//Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component

const App = () => {
    return (
    <div> 
        <label  className= "label" for="name"> Enter the name : </label>
        <input id="name" type="text" />
        <button style={{backgroundColor:"blue", color: "white"}}> Submit </button>
    </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);

