"use client";
import { cn } from "@/lib/utils";
import React, { FC, Fragment, ReactNode, useMemo, useState } from "react";

interface TabsProps {
	defaultValue?: number;
	tabsContent: {
		value: number;
		children: ReactNode;
		label: string;
	}[];
}

const Tabs: FC<TabsProps> = ({ defaultValue, tabsContent }) => {
	const [isActive, setIsActive] = useState<number>(defaultValue || tabsContent[0].value);

	const content = useMemo(() => {
		return tabsContent.filter((c) => c.value === isActive);
	}, [isActive, tabsContent]);

	return (
		<div className="flex flex-col gap-5">
			<div className="w-full border-b border-divider flex gap-2">
				{tabsContent.map((tab) => (
					<button
						className={cn(
							"pb-2 sm:w-full lg:min-w-[150px] sm:small",
							tab.value === isActive ? "text-default-color border-b" : "text-gray"
						)}
						key={tab.value}
						onClick={() => setIsActive(tab.value)}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className="flex flex-col gap-5">
				{content.map((c) => (
					<Fragment key={c.value}>{c.children}</Fragment>
				))}
			</div>
		</div>
	);
};

export default Tabs;
