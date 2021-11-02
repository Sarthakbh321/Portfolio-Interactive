import { Box } from "@chakra-ui/layout";
import React, { ReactNode } from "react";

interface IProps {
	children?: ReactNode;
	color?: string;
}

const BrandColor: React.FC<IProps> = ({ children, color = "brand.500" }) => {
	return (
		<Box as="span" color={color}>
			{children}
		</Box>
	);
};

export default BrandColor;
