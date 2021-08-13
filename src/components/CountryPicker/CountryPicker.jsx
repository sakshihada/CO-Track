import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from "./CountryPicker.module.css"
import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setFetchCountries(await fetchCountries());
        }
        fetchApi()
    }, [setFetchCountries]);
    return (
        <FormControl style={{ borderRadius:"5px" }} className={styles.formControl}>
            <NativeSelect  style={{ padding: "5px 15px"}}  defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               
                    <option value="">Select Country</option>
               
                {fetchedCountries.map((country) => <option value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
