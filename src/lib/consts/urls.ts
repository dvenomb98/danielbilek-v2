export enum URLS {
	HOMEPAGE = "/",
	BLOG = "/blog",
	PROJECTS = "/projects",
	TECHNOLOGIES = "/technologies",
	CONTACT = "/contact",
}

export const navigationLinks = [
	{ href: URLS.HOMEPAGE, label: "Home" },
	{ href: URLS.PROJECTS, label: "Projects" },
	{ href: URLS.TECHNOLOGIES, label: "Technologies" },
	{ href: URLS.BLOG, label: "Blog" },
	{ href: URLS.CONTACT, label: "Contact" },
];
