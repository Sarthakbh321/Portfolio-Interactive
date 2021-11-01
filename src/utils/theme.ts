import { extendTheme } from "@chakra-ui/react";
import { ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	fonts: {
		heading: "Inter, sans-serif",
	},
});

export default theme;
