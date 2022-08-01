import React from 'react';
import { Song, Track, Instrument, Effect } from 'reactronica';
function Chords(props) {
    return (
			<div>
				hello
				<Song isPlaying={false} bpm={70}>
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
					<Track 
					steps={['D3', null, 'C3']}
					>
						<Instrument
							type='sampler'
							samples={{
								C3: '/audio/G-chord.wav',
								D3: 'path/to/snare.mp3',
								E3: 'path/to/hihat.mp3',
							}}
						/>
					</Track>
				</Song>
			</div>
		);
}

export default Chords;