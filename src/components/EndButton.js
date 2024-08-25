import React from 'react';
import classes from './EndButton.module.css';

const EndButton = ({ onClick }) => {
    return <button className={classes.button} onClick={onClick}>END</button>;
};

export default EndButton;