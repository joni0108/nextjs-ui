import { twMerge } from "tailwind-merge";
import React from "react";

interface Props {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	size?: "sm" | "md" | "lg";
	style?: "solid" | "outline" | "ghost" | "soft" | "link";
}

export function Button({
	children,
	className,
	onClick,
	disabled,
	type = "button",
	size = "md",
	style = "solid",
}: Props) {
	const baseClasses = "font-medium focus:outline-none rounded-lg transition";
	const sizeClasses = {
		sm: "px-2.5 py-1.5 text-xs",
		md: "px-3 py-2 text-sm",
		lg: "px-4 py-2 text-base",
	};
	const styleClasses = {
		solid: `bg-slate-900 text-white border border-transparent hover:bg-slate-950 dark:bg-slate-100 dark:text-black dark:hover:bg-slate-50`,
		outline: `bg-transparent text-slate-900 dark:text-slate-100 border border-slate-900 dark:border-slate-100 hover:bg-slate-900 dark:hover:bg-slate-100 hover:text-white dark:hover:text-black`,
		ghost: `bg-transparent text-slate-900 dark:text-slate-100 border border-transparent hover:bg-slate-50 dark:hover:bg-slate-900 dark:hover:text-white`,
		soft: `bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 border border-slate-50 dark:border-slate-950 hover:bg-slate-100 dark:hover:bg-slate-800`,
		link: "bg-transparent text-slate-900 dark:text-slate-100 border border-transparent hover:underline",
	};

	const classes = twMerge(
		baseClasses,
		sizeClasses[size],
		styleClasses[style],
		className,
	);

	return (
		<button
			className={classes}
			onClick={onClick}
			disabled={disabled}
			type={type}
		>
			{children}
		</button>
	);
}
