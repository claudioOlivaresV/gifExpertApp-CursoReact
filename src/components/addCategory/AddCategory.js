import React, { useState } from 'react'
import propTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)

    }
    const handleclear = (e) => {
        setInputValue('')

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviado');
        if (inputValue.trim().length > 2) {
            setCategories(category => [inputValue, ...category, ]);
            setInputValue('')
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField
                id="standard-basic"
                className=" my-3 px-2"
                fullWidth
                label="Busar"
                type="text"
                value={inputValue}
                onChange={handleInput}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                      

                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleclear }
                            >
                                <CloseIcon/>
                            </IconButton>
                        </InputAdornment>
                    )
                    
                }}
              
            />

            {/* <input
                type="text"
                value={inputValue}
                onChange={handleInput}
            /> */}
            <p>{inputValue } </p>
        </form>
    )
}
// definor como obligatorios los props
AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

