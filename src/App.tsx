import "./App.scss";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

const App: React.FC = () => {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
		</div>
	);
};

export default App;
