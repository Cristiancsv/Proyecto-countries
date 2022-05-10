import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import c from './Detail.module.css'





export default function Detail(props){//ver esto de props, y con el useState?para manejarlo por estados locales

const dispatch=useDispatch();
const id = props.match.params.id//la parte del estado inicial del reducer que queremos traer

useEffect(()=>{//para que se actualice cuando haga los cambios(https://www.youtube.com/watch?v=6lvI-gTF_X8)
    dispatch(getDetail(id))//para acceder al id
},[dispatch, id]);
 


const myCountrie = useSelector((state)=>state.detail)

return ( <div> 
    <div className={c.botones}>
    <Link to='/create-activity'><button>Create new activity</button></Link>
    <Link to='/home'><button>Home</button></Link>
    </div>
       {myCountrie?
            <div key={myCountrie.id} className={c.to2}>
                 <div className={c.container}>
                 <h1>{myCountrie.name}</h1>
                 <h4>{myCountrie.id}</h4>
                 <h4>Continent: {myCountrie.continent}</h4>
                 <h4>Capital: {myCountrie.capital}</h4>
                 <h4>Subregion: {myCountrie.subregion}</h4>
                 <h4>Area: {myCountrie.area}</h4>
                 <h4>Population: {myCountrie.population}</h4>
                 <h4>{myCountrie.activities? ('Activity turistic: ' + myCountrie.activities.map(e => e.name)) : ('no posee actividadess')}</h4>
                 <h4>{myCountrie.activities? ('Difficulty: ' + myCountrie.activities.map(e => e.difficulty)) : ('no posee actividadess')}</h4>
                 <h4>{myCountrie.activities? ('Duration: ' + myCountrie.activities.map(e => e.duration)) : ('no posee actividadess')}</h4>
                 <h4>{myCountrie.activities? ('Season: ' + myCountrie.activities.map(e => e.season)) : ('no posee actividadess')}</h4></div>
                 <img className={c.image} src={myCountrie.img} alt="No hay plata"/> 
            </div> : 
        
           <div><h1>loading</h1></div>}
           </div>)
}