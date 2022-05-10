


 const initialState = {
 	countries : [],
 	aux : [],
    continent: [],
    activities: [],
    detail: [] 
 }



 function rootReducer(state=initialState, action){
 	switch(action.type){
		
 		case 'GET_COUNTRIES':
 		return {
 			...state,
 			countries: action.payload,
 		    aux: action.payload
 		};
		

        case 'POST_ACTIVITY':
            return {
                ...state,
            };

// 		case 'FILTER_DB':
// 		  const allDogs = state.aux;
//             const filter_db = action.payload === 'created' ? allDogs.filter(e => e.createdInDb) : allDogs.filter(e => !e.createdInDb);
//             return {
//                 ...state,
//                 dogs: action.payload === 'all' ? allDogs : filter_db
                 
//             };


        case 'ORDER_AZ':
          const all = state.aux
          const names = action.payload === 'asc' ?
                state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1;
                    }
                    return 0
                }) :
                state.countries.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1;
                    }
                    return 0;
                })
            return {
                ...state,
                countries: action.payload === 'all'? all : names
            };

        case 'GET_NAME':
           return {
            ...state,
            countries: action.payload
           };

//         case 'ORDER_WEIGTH':
//         const al = state.aux
//         const weigths = action.payload === 'asc' ?
//                 state.dogs.sort(function (a,b) {
//                    return parseInt(a.weight_min) - parseInt(b.weight_min);
//                 }) :
//                 state.dogs.sort(function (a,b) {
//                     return parseInt(b.weight_max) - parseInt(a.weight_max);
//                 });
//             return {
//                 ...state,
//                 dogs: action.payload === 'Dt'? al : weigths
//             };

//         case 'POST_DOG':
//             return {
//                 ...state,
//             };

            
		case 'GET_CONTINENTS':
            return {
                ...state,
                continent: action.payload
            };


        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            }

     
        case 'GET_FILTERCONTINENT':
             return {
                 ...state,
                  countries: action.payload
            };
          
        case 'GET_FILTERACTIVITY':
            return {
                ...state,
                countries: action.payload
            }

        case 'GET_DETAIL':
            return {
                ...state,
                detail: action.payload
            };


		default:
 		return state;
 	};

 }; 


 export default rootReducer