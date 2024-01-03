import LastPost from "@/components/LastPost";
import MainBanner from "@/components/MainBanner";
import ShortsLayout from "@/components/shorts/ShortsLayout";
import React, { FC } from "react";

const Home: FC = () => {
	return (
		<main className="page-container">
			<MainBanner />
			<ShortsLayout />
			<LastPost />
		</main>
	);
};

export default Home;
