import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import "./App.scss";

const App: React.FC = () => {
	const { toggleColorMode } = useColorMode();
	return (
		<div className="App">
			Hello World
			<Button variant="solid" colorScheme="teal" onClick={toggleColorMode}>
				Toggle
			</Button>
		</div>
	);
};

export default App;
