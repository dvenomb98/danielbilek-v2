import { Project } from "@/lib/types/general";
import yat from "public/images/yat.png";
import regiojet from "public/images/regiojet.png";
import gfteam from "public/images/gfteam.png";
import starter from "public/images/starter.png"

export default [
	{
		type: "Web apps",
		title: "Regiojet",
		description:
			"Currently developing new features at Regiojet. Regiojet is a Czech transport company that provides train and bus services both within the Czech Republic and across Europe. Their website is a one-stop-shop for anyone looking to purchase tickets for their own fleet of trains and buses. With a user-friendly interface, easy online booking, and competitive pricing, RegioJet is a popular choice for travelers across the continent.",
		website: "https://regiojet.com",
		github: "",
		image: regiojet,
	},
	{
		type: "Websites",
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
		type: "Games",
		title: "Online game - Yahtzee (beta)",
		description:
			"Yatzhee Online Game is a web-based implementation of the classic dice game, Yatzhee, built with NextJS. This is a multiplayer game where players can compete against their friends in real time.",
		features: [
			"Build with latest Next 14 features and Supabase",
			"Realtime updates with Supabase to support multiplayer game",
			"Server components and SSR Auth",
			"Dynamic HTML Streaming",
			"UI Built with ShadcnUI and Tailwind"
		],
		website: "https://kniffel-v2.vercel.app/",
		github: "https://github.com/dvenomb98/kniffel-v2",
		image: yat,
	},
	{
		type: "Starters",
		title: "NextDevKit",
		description: "The Ultimate NextJS Starter App for Efficient Development",
		website: "https://next-dev-kit.vercel.app",
		github: "https://github.com/dvenomb98/NextDevKit",
		features: [
			"Pre-configured with essential components and utilities",
			"Fully functional and ready dark mode, possibility of extending it for other themes",
			"Integrated Prettier setup for consistent code formatting",
			"Seo configuration with zero effort",
			"Time saving utils for daily use"
		],
		image: starter,
		
	}
	
] as Project[];
