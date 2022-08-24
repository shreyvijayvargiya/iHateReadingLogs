import React from "react";
import AwesomeSlider from "react-awesome-slider";

const HomePage = () => {
	return (
		<AwesomeSlider animation="fallAnimation">
			<div data-src="/nextlogo.png" />
			<div data-src="/twitter-green.png" />
			<div data-src="/unsplash.png" />
		</AwesomeSlider>
	);
};
export default HomePage;
