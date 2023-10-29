import LastPost from "@/components/LastPost";
import MainBanner from "@/components/MainBanner";
import Technologies from "@/components/Technologies";
import React, { FC } from "react";

const Home: FC = () => {
	return (
		<main className="page-container">
			<MainBanner />
			<Technologies />
			<LastPost />
			
		</main>
	);
};

export default Home;
