import React from 'react';
import classes from './StartButton.module.css';

const StartButton = ({ onClick }) => {
    return <button className={classes.button} onClick={onClick}>START</button>;
};

export default StartButton;