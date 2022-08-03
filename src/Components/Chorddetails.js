import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Track, Instrument } from 'reactronica';
import './Chorddetails.css'

function Chorddetails(props) {
	const { chord } = useParams();
	const [chordInput, setChordInput] = useState(null);

	//Reactronica States
	const [notes, setNotes] = useState(null);

	useEffect(() => {
		const url = `https://guitar-deck-mern.herokuapp.com/guitardeck/${chord}`;
		// const url = `http://localhost:8080/guitardeck/${chord}`;
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
		return<p>Page is loading...</p>;
	}

	return (
		<div className='details-container'>
			<title>{chordInput.name}</title>
			<h2>{chordInput.name}</h2>
			<img className='chord-image' src={chordInput.imageURL} alt={chordInput.name} />
			<p>{chordInput.details}</p>
			<div className='sound-button'>
				Click for Sound &nbsp;
				<button
					style={{
						backgroundColor: '#E59866',
					}}
					onClick={() => setNotes([{ name: chordInput.sound }])}
					onMouseUp={() => setNotes(null)}>
					🔊
				</button>
			</div>

			{/* reactronica */}
			<div>
				<Track>
					<Instrument
						type='sampler'
						notes={notes}
						samples={{
							A1: '../A-Chord.wav',
							A2: '../Am-Chord.wav',
							C1: '../C-Chord.wav',
							D1: '../D-Chord.wav',
							D2: '../Dm-Chord.wav',
							E1: '../E-Chord.wav',
							E2: '../Em-Chord.wav',
							F1: '../F-Chord.wav',
							G1: '../G-chord.wav',
						}}
						onLoad={(buffers) => {
							// Runs when all samples are loaded
						}}
					/>
				</Track>
			</div>
		</div>
	);
	
}

export default Chorddetails;
