import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import BgVideo from "../../assets/video_bg.mp4";
import "./HeroSection.scss";

const HeroSection: React.FC = () => {
	return (
		<Box className="hero-section">
			<Heading size="4xl" color="white" className="hero-heading">
				Welcome to my Website
			</Heading>
			<video src={BgVideo} />
		</Box>
	);
};

export default HeroSection;
