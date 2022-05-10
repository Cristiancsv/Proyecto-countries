import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getName} from '../actions';
import c from './SearchBar.module.css'
export default function SearchBar(){
	const dispatch = useDispatch()
   

    const [name,setName] = useState('')
  
    function handleInput(e){
  
    	e.preventDefault()
    	setName(e.target.value)
    }

    function handleSubmit(e){
    	e.preventDefault()
    	dispatch(getName(name))
        return setName('')
    };

  return (
  	<div className={c.search}>
  	   <input type='text' placeholder='search for' onChange={e=>handleInput(e)}/>
  	   <button type='submit' onClick={e=>handleSubmit(e)}>Search</button>
      </div> 
      )
};