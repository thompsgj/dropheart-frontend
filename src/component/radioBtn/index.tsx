// components/RadioButton.js
import React from 'react';
import styles from './radio.module.css';

const RadioButton = ({id, name, value, checked, onChange, label}: {
    id: string,
    name: string,
    value: string,
    checked: boolean,
    onChange: () => void,
    label: string
}) => {
    return (
        <label className={styles.customRadio}>
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.radioInput}
            />
            <span className={styles.radioMark}></span>
            {label}
        </label>
    );
};

export default RadioButton;
