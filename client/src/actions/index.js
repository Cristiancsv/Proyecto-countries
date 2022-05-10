import axios from 'axios';

 export function getCountries(){
 	return async function(dispatch){
 		var json = await axios.get(`http://localhost:3001/countries`);
 		return dispatch ({
 			type: 'GET_COUNTRIES',
 			payload: json.data
 		})
 	}
 };


// export function filterDb(payload) {
//     return {
//         type: 'FILTER_DB',
//         payload
//     }
// };

export function orderAz(payload) {
    return {
        type: 'ORDER_AZ',
        payload
    }
};

// export function orderWeight(payload) {
// 	return {
// 		type: 'ORDER_WEIGTH',
// 		payload
// 	}
// };


export function getName(payload){
    return async function(dispatch){
        try{
            var json= await axios.get("http://localhost:3001/countries?name=" + payload)
        return dispatch({
            type: 'GET_NAME',
            payload:json.data})
        } catch(error){
            console.log(error)
        }
    }
};


export function getContinents() {
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/continents');
        return dispatch({
            type: 'GET_CONTINENTS',
            payload: json.data
        });
    }
};


export function getFilterContinent(payload){
    return async function(dispatch){
        try{
            var json= await axios.get("http://localhost:3001/filter-continent?continent=" + payload)
        return dispatch({
            type: 'GET_FILTERCONTINENT',
            payload:json.data
        })
        } catch(error){
            console.log(error)
        }
    }
};



export function getActivities() {
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/activities');
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: json.data
        });
    }
};

export function getFilterActivity(payload){
    return async function(dispatch){
        try{
            var json= await axios.get("http://localhost:3001/filter-activities?name=" + payload)
        return dispatch({
            type: 'GET_FILTERACTIVITY',
            payload:json.data
        })
        } catch(error){
            console.log(error)
        }
    }
}



export function postActivity(payload){
    return async function (dispatch){
        const json = await axios.post('http://localhost:3001/activities',payload);
        return json;
    }
};





export function getDetail(id) {
    return async function (dispatch) {
        try {
            var json = await axios.get('http://localhost:3001/countries/' + id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (err) {
            console.log(err)
        }
    }
}
