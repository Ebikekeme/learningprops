import { useState } from "react";

function Card(props){


    const [isAdded , setIsAdded]= useState(false);

   // const handleButtonClick =() => {
     //   setIsAdded(true);
   // };

    return (

        <div className="contact-card">
            <img src={props.img} alt="headphones" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <button onClick={()=> setIsAdded(prevState => !prevState)}>
                    {isAdded === true? "remove from cart" : "add to cart"}
                </button>
            </div>
        </div>
    )
}
export default Card;
