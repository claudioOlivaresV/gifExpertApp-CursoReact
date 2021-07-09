import React, { useState } from 'react'
import { AddCategory } from './addCategory/AddCategory'
import AppHeader from './appBar/AppHeader'
import { GiftGrid } from './giftGrid/GiftGrid'
export const GifExpertApp = () => {
    // const categories = ['One Puch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Dragon Ball Z'])

    // const handleAdd = () => {
    //     // setCategories([...categories, 'nueva'])
    //     setCategories(category => [...category, 'nueva'])

    // }
    return (
        <>
          <AppHeader />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={setCategories}/>
            <ol>
                {
                    categories.map((category) => 
                    <GiftGrid  key={category} category={category}/>
                    )
                }
            </ol>

        </>
    )
}
