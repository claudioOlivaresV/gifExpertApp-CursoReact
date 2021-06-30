import React, { useState } from 'react'
import propTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {
    const [inputValue, setInputValue] = useState('')
    const handleInput = (e) => {
        setInputValue(e.target.value)

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('enviado');
        if(inputValue.trim().length > 2) {
            setCategories(category => [...category, inputValue]);
            setInputValue('')
        } 

    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= {inputValue}
                onChange= { handleInput }
            />
        </form>
    )
}
// definor como obligatorios los props
AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired
}

