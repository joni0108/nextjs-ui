"use client";

import { twMerge } from "tailwind-merge";

export type ButtonType = {
	label: string;
	classes?: string;
	onClick?: () => void;
};

interface Props {
	buttons: ButtonType[];
	size?: "sm" | "md" | "lg";
	vertical?: boolean;
}

export function ButtonGroup({ buttons, size, vertical }: Props) {
	const baseClasses =
		"bg-slate-900 dark:bg-slate-100 hover:bg-slate-950 hover:dark:bg-slate-200 text-slate-50 dark:text-slate-950";

	return (
		<div className={vertical === true ? "flex flex-col" : ""}>
			{buttons.map((button, index) => {
				let classes = baseClasses;

				if (!vertical) {
					if (index === 0) {
						classes = twMerge(classes, "rounded-l-lg");
					}
					if (index === buttons.length - 1) {
						classes = twMerge(classes, "rounded-r-lg");
					}
				} else {
					if (index === 0) {
						classes = twMerge(classes, "rounded-t-lg");
					}
					if (index === buttons.length - 1) {
						classes = twMerge(classes, "rounded-b-lg");
					}
				}

				if (!size) {
					size = "md";
				}
				switch (size) {
					case "sm":
						classes = twMerge(classes, "px-2.5 py-1.5 text-xs");
						break;
					case "md":
						classes = twMerge(classes, "px-3 py-2 text-sm");
						break;
					case "lg":
						classes = twMerge(classes, "px-4 py-2 text-base");
						break;
				}

				return (
					<button
						className={twMerge(classes, button.classes)}
						key={crypto.randomUUID()}
						onClick={button.onClick}
					>
						{button.label}
					</button>
				);
			})}
		</div>
	);
}
