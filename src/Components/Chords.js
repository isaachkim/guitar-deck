import React, {useState} from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';


function Chords(props) {
	  const [isPlaying, setIsPlaying] = useState(false);
   const [notes, setNotes] = useState(null);


	function onChange(){
		setIsPlaying(true)
	}
	function onOff(){
		setIsPlaying(false)
	}

    return (
			<div>
				<button onClick={onChange}>On</button>

				<button onClick={onOff}>off</button>
				<button
					onMouseDown={() => setNotes([{ name: 'D3' }])}
					onMouseUp={() => setNotes(null)}>
					click
				</button>
				<button
					onClick={() => setNotes([{ name: 'G3' }])}
					onMouseUp={() => setNotes(null)}
					>
					click
				</button>

				<Song isPlaying={isPlaying} bpm={70}>
					<Track
						steps={[
							['A3', 'E3', 'C3'],
							null,
							['F3', 'A3', 'C3'],
							null,
							['D3', 'F3', 'A3'],
							null,
							['E3', 'G3', 'B3'],
							null,
						]}
						volume={-4}
						pan={0}
						// mute={false}
						// onStepPlay={(step) => {
						// 	// Callback that triggers on every step
						// 	console.log(step); // 'C3' ... 'G3' ... 'F3' ... 'G3'
						// }}
					>
						<Instrument type='fmSynth' />
						<Effect type='reverb' />
					</Track>
					<Track steps={['D3', null, 'C3']}>
						<Instrument
							type='sampler'
							notes={notes}
							samples={{
								G3: './G-chord.wav',
								D3: './test.wav',
								// E3: 'path/to/hihat.mp3',
							}}
							onLoad={(buffers) => {
								// Runs when all samples are loaded
							}}
						/>
					</Track>
				</Song>
			</div>
		);
}

export default Chords;