import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import NavigationBar from './Components/NavigationBar';
function App() {
	return (
		<>
			<header>
        <NavigationBar />
      </header>
      <main></main>
      <footer></footer>
		</>
	);
}

export default App;
