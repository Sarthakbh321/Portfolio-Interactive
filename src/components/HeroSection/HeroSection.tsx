import { Box, Heading } from "@chakra-ui/layout";
import React, { useEffect, useRef } from "react";
import { Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import BgVideo from "../../assets/video_bg.mp4";
import "./HeroSection.scss";

const HeroSection: React.FC = () => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (videoRef.current) {
			console.log("hi");
			// videoRef.current.play();
		}
	}, [videoRef]);

	// const handleScroll = () => {
	// 	(window as any).progress = window.scrollY;

	// 	if (videoRef.current) {
	// 		const time = (window as any).progress / 1000;

	// 		videoRef.current.currentTime = time || 0;
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener("scroll", handleScroll, { passive: true });

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<Controller>
			{/* <Box className="video-container">
				<video src={BgVideo} ref={videoRef} className="hero-video" autoPlay />
			</Box> */}
			<Scene duration={5000} pin triggerHook={0}>
				{(_progress: number) => {
					// updateProgress(_progress);
					return (
						<Box className="hero-section">
							<video
								src={BgVideo}
								ref={videoRef}
								className="hero-video"
								autoPlay
								muted
								loop
							/>
							<Tween
								to={{
									left: "150%",
									opacity: 0,
								}}
								ease="Strong.easeOut"
								paused
								totalProgress={_progress}
							>
								<Heading size="4xl" color="white" className="hero-heading">
									Welcome to my Website
								</Heading>
							</Tween>
						</Box>
					);
				}}
			</Scene>
		</Controller>
	);
};

export default HeroSection;
