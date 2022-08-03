import { Routes, Route } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Home from './Components/Home'
import Chorddetails from './Components/Chorddetails';
import NotFound from './Components/NotFound';

function App() {
	return (
		<>
			<header>
				<NavigationBar />
			</header>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/guitardeck/:chord' element={<Chorddetails />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
			<footer></footer>
		</>
	);
}

export default App;
