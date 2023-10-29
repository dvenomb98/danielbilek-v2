import { Project } from "@/lib/types/general";
import yat from "public/images/yat.webp";
import regiojet from "public/images/regiojet.png";
import gfteam from "public/images/gfteam.png";

export default [
	{
		type: "featured",
		title: "Regiojet",
		description:
			"Currently developing new features at Regiojet. Regiojet is a Czech transport company that provides train and bus services both within the Czech Republic and across Europe. Their website is a one-stop-shop for anyone looking to purchase tickets for their own fleet of trains and buses. With a user-friendly interface, easy online booking, and competitive pricing, RegioJet is a popular choice for travelers across the continent.",
		website: "https://regiojet.com",
		github: "",
		image: regiojet,
	},
	{
		type: "main",
		title: "GFTeam Brno",
		description:
			"The GF Team Brno BJJ website is a dedicated platform for the Brazilian Jiu-Jitsu enthusiasts of the GF Team in Brno. Leveraging the power of Next.js, this frontend project offers a seamless user experience, lightning-fast page loads, and server-side rendering capabilities, ensuring optimal performance and SEO benefits.",
		github: "",
		image: gfteam,
		website: "https://gfteambrno.com",
		features: [
			"Build with Nextjs app router",
			"Blazing fast performance and great SEO with server side rendering",
			"Different themes, styled with Tailwind",
			"Automatic locale detection",
			"Connected to Strapi CMS to manage content easily",
		],
	},
	{
		type: "secondary",
		title: "Online game - Yahtzee",
		description:
			"Yatzhee Online Game is a web-based implementation of the classic dice game, Yatzhee, built with NextJS. This is a multiplayer game where players can compete against their friends in real time.",
		website: "https://yahtzee-mu.vercel.app",
		github: "https://github.com/dvenomb98/kniffel",
		image: yat,
	},
] as Project[];
