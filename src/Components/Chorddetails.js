import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Chorddetails(props) {
	const { chord } = useParams();
	const [chordInput, setChordInput] = useState(null);

	useEffect(() => {
		const url = `http://localhost:8080/guitardeck/${chord}`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setChordInput(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [chord]);

	if (!chordInput) {
		return;
	}

	return(
    <div>
        <title>{chordInput.name}</title>
        <h2>{chordInput.chord}</h2>
        <img src={chordInput.imageURL} alt={chordInput.name} />
        <p>{chordInput.details}</p>
    </div>)
	
}

export default Chorddetails;
