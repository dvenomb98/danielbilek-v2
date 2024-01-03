import { StaticImageData } from "next/image";

export type TagStructure = { name: string; count: number };

export interface PrevNextPost {
	prev: { title: string; url: string } | null;
	next: { title: string; url: string } | null;
}
export interface Project {
	type: string
	title: string
	description: string
	website: string
	github?: string
	features?: string[]
	image: StaticImageData

}

export enum FormStatus {
	SUCCESS = "success",
	ERROR = "error",
	UNSENT = "unsent"
}
export interface ShortsAuthor {
	name: string
	image: StaticImageData
}
export interface Shorts {
	image: StaticImageData
	description: string
	id: number
	author: ShortsAuthor
	date: string
}