import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home'
import Chorddetails from './Components/Chorddetails';
import Chords from './Components/Chords'


function App() {
	return (
		<>
			<header>
				<NavigationBar />
			</header>
			<main>
				<Routes>
					<Route path='/chord' element={<Chords />} />

					<Route path='/' element={<Home />} />
					<Route path='/guitardeck/:chord' element={<Chorddetails />} />
				</Routes>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
