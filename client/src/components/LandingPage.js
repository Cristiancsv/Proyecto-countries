import React from 'react';
import {Link} from 'react-router-dom';
import c from './LandingPage.module.css'

export default function LandingPage(){
	return(
		<div className={c.container}>
			<h1>Henry Countries</h1>
			<Link to='/home'>
				<button>Enter</button>
			</Link>
		</div>
		)
};