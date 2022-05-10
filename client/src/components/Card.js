import React from "react";
import c from './Card.module.css'
export default function Card({img, name, continent}){
    
    return (
        <div className={c.container}>
            
            <h3 className={c.name}>{name}</h3>
            

            <img className={c.image} src={img} alt="no hay plata"/>
            

            <h5 className={c.continent}>{continent}</h5>
            
             </div>

    )}