//? This component can be used on either server or client components
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
	classes?: string;
	type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
	bold?: boolean;
	italic?: boolean;
	underline?: "underline" | "line-through" | "no-underline" | "overline";
	lineHeight?:
		| "none"
		| "tight"
		| "snug"
		| "normal"
		| "relaxed"
		| "loose"
		| "3"
		| "4"
		| "5"
		| "6"
		| "7"
		| "8"
		| "9"
		| "10";
	children: React.ReactNode;
}

const internalClasses = {
	h1: "text-4xl",
	h2: "text-3xl",
	h3: "text-2xl",
	h4: "text-xl",
	h5: "text-lg",
	h6: "text-base",
	p: "text-base",
	span: "text-xs",
};

export function Typography({
	classes = "",
	type = "p",
	children,
	bold,
	italic,
	underline,
	lineHeight,
}: Props) {
	const Tag = type;

	let baseClasses = twMerge(internalClasses[type], "dark:text-white");

	if (bold) baseClasses = twMerge(baseClasses, "font-bold");
	if (italic) baseClasses = twMerge(baseClasses, "italic");
	if (underline) baseClasses = twMerge(baseClasses, underline);
	if (lineHeight) baseClasses = twMerge(baseClasses, `leading-${lineHeight}`);

	baseClasses = twMerge(baseClasses, classes);

	return <Tag className={twMerge(baseClasses)}>{children}</Tag>;
}
