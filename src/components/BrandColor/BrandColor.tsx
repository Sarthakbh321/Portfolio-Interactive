import { Box } from "@chakra-ui/layout";
import React from "react";

const BrandColor: React.FC = ({ children }) => {
	return (
		<Box as="span" color="brand.500">
			{children}
		</Box>
	);
};

export default BrandColor;
