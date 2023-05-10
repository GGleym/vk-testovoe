import Select from "react-select";
import React from 'react'
import styles from '../styles/Forms.module.css'
export const InputSelect = ({upText, options, placeholder, value, onChange}) => {

        return (
        <>
            <p className={styles.upText}>{upText}</p>
            <Select
                value={value}
                onChange={onChange}
                options={options}
                placeholder={placeholder}
            ></Select>
        </>
    )
}