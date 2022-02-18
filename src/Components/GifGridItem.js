import react from "react";

export const GifGridItem = ({url, title})=> {
    
//datos entre parentesis son valores

    return(
        <div className="animate__backInLeft">
           <img src={url} alt={title} /> 
           <p>{title}</p>
        </div>
    )
}