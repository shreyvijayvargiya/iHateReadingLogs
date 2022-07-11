import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

const MyApp = ({ Component, pageProps }) => {
	return (
		<div>
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
