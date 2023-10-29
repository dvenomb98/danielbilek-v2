import { StaticImageData } from "next/image";

export type TagStructure = { name: string; count: number };

export interface PrevNextPost {
	prev: { title: string; url: string } | null;
	next: { title: string; url: string } | null;
}

export type ProjectType = "main" | "featured" | "secondary"

export interface Project {
	type: ProjectType
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