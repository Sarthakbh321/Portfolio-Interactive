import { extendTheme } from "@chakra-ui/react";
import { ThemeConfig } from "@chakra-ui/theme";

const config: ThemeConfig = {
	initialColorMode: "light",
};

const theme = extendTheme({
	config,
	fonts: {
		heading: "Inter, sans-serif",
	},
	colors: {
		brand: {
			"50": "#F6E7FD",
			"100": "#E6BDFA",
			"200": "#D592F7",
			"300": "#C567F3",
			"400": "#B43DF0",
			"500": "#A412ED",
			"600": "#830FBD",
			"700": "#620B8E",
			"800": "#42075F",
			"900": "#21042F",
		},
		bg: {
			500: "#1a1b1a",
		},
	},
});

export default theme;
