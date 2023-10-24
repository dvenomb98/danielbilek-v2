export type TagStructure = { name: string; count: number };

export interface PrevNextPost {
	prev: { title: string; url: string } | null;
	next: { title: string; url: string } | null;
}
