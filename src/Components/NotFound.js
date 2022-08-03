import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound(props) {
	return (
		<div className='notFound'>
			<title>Not Found!</title>
			<h2>
				Oops! Page not found. Click{' '}
				<Link to='/' className='here'>
					here
				</Link>{' '}
				to go back home.
			</h2>
			<img
				src='https://media.giphy.com/media/mK9GSYeMKi9Np9zuzK/giphy.gif'
				alt='404 Not Found'
			/>
		</div>
	);
}

export default NotFound;
