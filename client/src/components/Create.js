import React from 'react';
import {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {getCountries, postActivity} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import c from './Create.module.css'


function validateForm(input) {
console.log(input)
  let errors = {};

  //name
  if (!input.name) {
    errors.name = 'A name is required';}
   else if (input.name.length > 25) {
    errors.name = 'Name too long';} else {
    	errors.name = '';}


   if(!input.difficulty){
   	   errors.difficulty = 'Difficulty is required'
   } else if(input.difficulty < 1){
   	   errors.difficulty = 'Difficulty must be from 1 to 5'
   } else if(input.difficulty > 5){
   	   errors.difficulty = 'Difficulty must be from 1 to 5'
   } else {
   	errors.difficulty= ''
   }


   if(!input.duration){
    errors.duration = 'Duration is required'
   } else if(input.duration < 1){
    errors.duration = 'The duration must be from 1 to 12'
   } else if(input.duration > 12){
    errors.duration = 'The duration must be from 1 to 12'
   } else { errors.duration = ''}


   if(!input.countries){
    errors.countries = 'A country is required'
   } else if(input.countries.length > 2){
    errors.countries = 'Only 2 countries maximum supported'
   } else { errors.countries = ''}

  return errors;
}


export default function Create(){
	const dispatch = useDispatch()
	const history = useHistory()
	const countries = useSelector((state) => state.countries )
	

	const [input, setInput] = useState({
                "name":"",
                "difficulty":"",
                "duration":"",
                "season":"",
                "countries":[]
	
	})
    
    

    const [errors, setErrors] = useState({
             name: 'Please complete the following fields and keep in mind that a maximum of two countries are allowed'});
	




	function handleChange(e){
		setInput({
			...input,
			[e.target.name] : e.target.value
		});
		setErrors(validateForm({
        ...input,
        [e.target.name]: e.target.value
      }));
	}
     
	function handleSubmit(e){
		e.preventDefault();
    if (
      !errors.name &&
      !errors.difficulty &&
      !errors.duration &&
      !errors.countries
    ) {dispatch(postActivity(input))
		alert('Activity created')
		setInput({
			             "name":"",
                   "difficulty":"",
                   "duration":"",
                   "season":"",
                   "countries":[] 
                                   })} else {
                 setInput({
                   "name":"",
                   "difficulty":"",
                   "duration":"",
                   "season":"",
                   "countries":[] 
                                   })
      return alert('please fill in the form again avoiding errors');
    }
		 history.push('/home')
	}

  function handleSelect2(e){
  	setInput({
			...input,
			season:e.target.value
		});
        setErrors(validateForm({
        ...input,
        season:e.target.value
      }));

  }



	function handleSelect(e){
		setInput({
			...input,
			countries:[...input.countries,e.target.value]
		});
        setErrors(validateForm({
        ...input,
        countries:[...input.countries,e.target.value]
      }));
	}

	useEffect(() => {
        dispatch(getCountries())
        },[dispatch]);

	return(
		<div className={c.container}>
			<Link to='/home'><button>Return home</button></Link>
			<h2>Activity creation form</h2>
			<form onSubmit={(e)=>handleSubmit(e)}>
				<div>
					<label>Name of the activity:</label>
					<input 
					type='text'
					name= 'name'
					value={input.name}
					onChange={(e)=>handleChange(e)}
				/>{errors.name && (<p className={c.rojo}>{errors.name}</p>)}
				</div>


				<div>
					<label>Activity difficulty:</label>
					<input
                    type='number'
                    name='difficulty'
                    value={input.difficulty} 
                    onChange={(e)=>handleChange(e)}/>
                    {errors.difficulty && (<p className={c.rojo}>{errors.difficulty}</p>)}
				</div>

				<div>
                    <label>Number of weeks duration:</label>
                    <input
                    type='number'
                    name='duration'
                    value={input.duration}
                    onChange={(e)=>handleChange(e)}/>
                     {errors.duration && (<p className={c.rojo}>{errors.duration}</p>)}
                </div>

                
                 <div>
                    <label>Activity season:</label>
                    <select onChange={(e)=>handleSelect2(e)}>
                    <option name='season' value=''>Default</option>
                    <option name='season' value='summer'>Summer</option>
                    <option name='season' value='winter'>Winter</option>
                    <option name='season' value='autumn'>Autumn</option>
                    <option name='season' value='spring'>Spring</option> </select>
                   
                  <ul><li>{input.season}</li></ul>
                </div>

 

                <div>
                    <label>Country where it takes place:</label>
                <select onChange={(e)=>handleSelect(e)}>
                	{countries.map((e)=>(
                		<option name='countries' value={e.name} key={e.id}>{e.name}</option>))}
                </select>
                 {errors.countries && (<p className={c.rojo}>{errors.countries}</p>)}
                <ul><li className={c.text}>{input.countries.map(e => e + " , ")}</li></ul>

                </div>
              
                <button type='submit'>Submit</button>

			</form>
		</div>

		)
}