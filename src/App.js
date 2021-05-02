import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ChooseYourMS from './components/ChooseYourMS';
import Section2 from './components/Section2';
import GamePass from './components/GamePass';
import Section3 from './components/Section3';
import MSResponse from './components/MSResponse';
import ThisHoliday from './components/ThisHoliday';
import Social from './components/Social';
import Footer from './components/Footer';
import Showcase from './pages/Showcase';
import LearnMore from './pages/LearnMore';

function App() {
	return (
		<Router>
			<Header />
			<Route path="/" exact>
				<Hero />
				<ChooseYourMS />
				<Section2 />
				<GamePass />
				<Section3 />
				<MSResponse />
				<ThisHoliday />
				<Social />
			</Route>
			<Route path="/microsoft-365">
				<Showcase />
				<LearnMore />
			</Route>
			<Footer />
		</Router>
	);
}

export default App;
