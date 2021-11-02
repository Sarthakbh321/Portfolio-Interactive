import { Box, Heading } from "@chakra-ui/layout";
import React, { useEffect, useRef } from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import BgVideo from "../../assets/video_bg.mp4";
import BrandColor from "../BrandColor/BrandColor";
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
			<Scene duration={5000} pin triggerHook={0}>
				{(_progress: number) => {
					return (
						<Box className="hero-section">
							<video
								src={BgVideo}
								ref={videoRef}
								className="hero-video"
								autoPlay
								preload="preload"
								muted
								loop
							/>
							<Timeline
								totalProgress={_progress}
								target={
									<>
										<Heading size="4xl" color="white" className="hero-heading">
											Welcome to <BrandColor>my Website</BrandColor>
										</Heading>

										<Heading size="4xl" color="white" className="hero-heading">
											<BrandColor>I am a</BrandColor> developer
										</Heading>
										<Box className="hero-heading">
											<Heading
												size="4xl"
												color="white"
												// className="hero-heading"
												fontWeight="black"
												letterSpacing="1.5px"
											>
												Currently a student
											</Heading>
											<Heading
												size="xl"
												color="white"
												mt="10px"
												fontWeight="black"
												letterSpacing="1.5px"
											>
												Studying at{" "}
												<BrandColor>
													Vellore Institute of Technology, Vellore
												</BrandColor>
											</Heading>
										</Box>
										<Heading
											size="4xl"
											className="hero-heading"
											color="brand.500"
											letterSpacing="5px"
										>
											Enjoy!
										</Heading>
									</>
								}
							>
								<Tween
									to={{
										left: "100vw",
										opacity: 0,
										filter: "blur(2px)",
									}}
									ease="Power.easeOut"
									target={0}
									delay={50}
									duration={500}
								></Tween>
								<Tween
									from={{ opacity: 0 }}
									to={{
										opacity: 1,
									}}
									ease="Power.easeOut"
									delay={200}
									target={1}
									duration={250}
								></Tween>
								<Tween
									to={{
										opacity: 0,
										scale: 3,
										filter: "blur(10px)",
									}}
									ease="Strong.easeOut"
									target={1}
									delay={50}
									duration={250}
								></Tween>
								<Tween
									from={{ left: "-100vw", opacity: 0 }}
									to={{ left: "50%", opacity: 1 }}
									ease="Power.easeOut"
									target={2}
									delay={50}
									duration={500}
								/>
								<Tween
									to={{ opacity: 0, filter: "blur(10px)" }}
									ease="Power.easeIn"
									target={2}
									delay={50}
									duration={500}
								/>
								<Tween
									from={{
										left: -2000,
										rotation: -720,
										opacity: 0,
										color: "#ff0000",
										ease: "Expo.easeOut",
									}}
									stagger={0.15}
									target={3}
									duration={500}
								></Tween>
							</Timeline>
						</Box>
					);
				}}
			</Scene>
		</Controller>
	);
};

export default HeroSection;
