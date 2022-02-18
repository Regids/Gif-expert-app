import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategories';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = ()=>{

    const[categories,setCategories] = useState(['Naruto']);

  /*  const handleApp = () => {
        setCategories([...categories,'DATE']);
    }*/

    return(
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/> 
            <hr/>
         
          <ol>
               {
                  categories.map(category =>
                    
                    <GifGrid
                    key={category} 
                    category = {category} />
                   
                  )
                }
          </ol>

        </div>
    )
}