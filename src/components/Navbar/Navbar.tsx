import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { MdDownload } from "react-icons/md";

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
				<Flex flexDirection="row" justifyContent="flex-start">
					<Text fontSize="xl" color="white" fontWeight="bold" letterSpacing="1.5px">
						Sarthak Bharadwaj
					</Text>
					<Flex marginLeft="auto">
						<Button
							colorScheme="brand"
							aria-label="Download resume"
							leftIcon={<Icon as={MdDownload} color="white" fontSize="xl" />}
						>
							Download Resume
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Box>
	);
};

export default Navbar;
