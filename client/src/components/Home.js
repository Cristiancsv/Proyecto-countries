 import React from "react";
 import {useState,useEffect} from 'react';
 import {useDispatch,useSelector} from 'react-redux';
 import {getCountries,getContinents,getFilterContinent,getActivities,getFilterActivity,orderAz/*,filterDb,orderWeight,*/} from '../actions';
 import {Link} from 'react-router-dom';
 import Card from './Card';
 import Paginated from './Paginated';
 import SearchBar from './SearchBar';
import c from './Home.module.css'

 export default function Home (){

 	const dispatch = useDispatch();

 	const allCountries = useSelector((state)=>state.countries)

     const continent = useSelector((state) => state.continent)
     const activities = useSelector((state) => state.activities)

    //pagina2
    const [currentPage, setCurrentPage] = useState(1);
    // const [countriesPerPage, setCountriesPerPage] = useState(10);
     
    let countriesPerPage = 10;
    if(currentPage === 1) {
      countriesPerPage = 9;
    }
    if(currentPage >= 2){
      countriesPerPage =10
    }

    const indexOfLastCountries = currentPage * countriesPerPage;
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage;
    const currentCountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries); 
    

    
    const [/*order*/,setOrder] = useState('');

     const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    }


 useEffect(() => {
         dispatch(getCountries())
         dispatch(getContinents())
         dispatch(getActivities())
     }, [dispatch])
 

 function handleClick(e){
e.preventDefault();
dispatch(getCountries());
};


// function handlefilterDb(e){
//      e.preventDefault();
//         setCurrentPage(1);
//     dispatch(filterDb(e.target.value))
// };


  function handleName(e) {
        e.preventDefault();
        dispatch(orderAz(e.target.value));
        // setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
};

// function handleWeight(e) {
//         e.preventDefault();
//         dispatch(orderWeight(e.target.value));
//         setCurrentPage(1);
//         setOrder(`Ordenado ${e.target.value}`);
// };



    
    function handleFilterContinent(e){
        e.preventDefault()
        dispatch(getFilterContinent(e.target.value));
        setCurrentPage(1);
    };

    
    function handleFilterActivity(e){
        e.preventDefault()
        dispatch(getFilterActivity(e.target.value))
    }




 return (
    <div>
 	<div className={c.cabecera}>
         <Link className={c.crear} to= '/create-activity'><button>Create new activity</button></Link>
 		<h1 className={c.henry}>Henry Countries</h1>
         <button className={c.reload} onClick={e=>{handleClick(e)}}>Reload</button>
         <SearchBar/>
 	</div>

	 
    
     <div className={c.containertemp}>
             <div className={c.filter1}>
 	            <label>Order alphabetically: </label>
                 <select onChange={e => handleName(e)}>
 	            <option value='all'>Default</option>
 	            <option value='asc'>A-Z</option>
 	            <option value='desc'>Z-A</option>
 	            </select>
             </div>
	       
   
         {/*  <div className={c.filter2}>
                 <label>Filter by weight: </label>
                 <select onChange={e => handleWeight(e)}>
 	            <option value='Dt'>Default</option>
                 <option value='asc'>Buscar por peso  ascendente</option>
                 <option value='desc'>Buscar por peso descendente</option>
                 </select>
             </div>*/}
 
    
             <div className={c.filter3}>   
                <label>Filter by continent: </label>
                 <select onChange={e => handleFilterContinent(e)}>
                 {continent.map((e)=>(
                 <option value={e} key={e}>{e}</option>))}
                 <option value='all'>All</option>
                 </select>
             </div>


             <div className={c.filter4}>
                 <label>Filter by activity: </label>
                 <select onChange={e => handleFilterActivity(e)}>
                 {activities.map((e)=>(
                 <option value={e.name} key={e.id}>{e.name}</option>))}
                 <option value='all'>All</option>
                 </select>
             </div>  
               
   </div>


              <div className={c.paginated}>
              <Paginated 
                  countriesPerPage={countriesPerPage}
                  allCountries={allCountries.length}
                  paginated={paginated} />
              </div>

             <div className={c.container}>
                 {
                         currentCountries?.map((e) => {
                         return (
                                 <div key={e.id}>
                                 <Link className={c.link} to={e.img? ('/home/' + e.id) : '/home' }>
                                     <Card
                                         name={e.img? e.name : ('Activity: ' + e.name)}
                                         img={e.img? e.img : 'https://felicianodejesus.files.wordpress.com/2015/08/turismo.jpg?w=472&h=289'}
                                         continent={e.continent? e.continent : ('Countries: ' + e.countries.map(e => e.name))}
                                         key={e.id}
                                     />
                                 </Link>
                                </div>
                         )
                     })
                 }
             </div>

 	 </div>



 	);


 };