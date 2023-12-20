import type { MDXComponents } from "mdx/types";
import TextLink from "../ui/TextLink";

// Define your custom MDX components.
export const mdxComponents: MDXComponents = {
	a: ({ children, href, ...props }) => (
		<TextLink href={href as string} {...props}>
			{children}
		</TextLink>
	),
	h1: ({ children }) => <h1 className="h1">{children}</h1>,
	h2: ({ children }) => <h2 className="h2">{children}</h2>,
	h3: ({ children }) => <h3 className="h3">{children}</h3>,
	h4: ({ children }) => <h4 className="h4 font-medium">{children}</h4>,
	p: ({ children }) => <p className="text-muted-foreground">{children}</p>,
	strong: ({ children }) => (
		<strong className="p-0.5 px-1 text-foreground font-normal bg-secondary rounded-md">
			{children}
		</strong>
	),
	// Add a custom component.
};
