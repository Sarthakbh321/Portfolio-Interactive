import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Navbar: React.FC = () => {
	return (
		<Box
			pos={"fixed"}
			top={0}
			w="100vw"
			bg="transparent"
			// shadow="md"
			zIndex={100}
			transition="0.2s ease-in-out all"
		>
			<Box py="10px" px="32px">
				<Flex flexDirection="column" justifyContent="flex-start">
					<Text fontSize="xl" color="white" fontWeight="bold" letterSpacing="1.5px">
						Sarthak Bharadwaj
					</Text>
				</Flex>
			</Box>
		</Box>
	);
};

export default Navbar;
