"use client";

import { ReactNode, useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface Props {
	icon: ReactNode;
	onclick?: () => void;
	headerComponent?: ReactNode;
	mainComponent?: ReactNode;
}

export function FloatButton({
	icon,
	onclick,
	headerComponent,
	mainComponent,
}: Props) {
	let baseClasses =
		" h-10 w-10 bg-slate-900 dark:bg-slate-200 text-slate-50 dark:text-slate-950 rounded-full flex justify-center items-center fixed bottom-5 right-8 shadow-md hover:bg-slate-800 transition duration-300 ease-in-out";

	const height = 1080;
	const [isOpen, setIsOpen] = useState(false);
	const [y, setY] = useState(height + 500);

	useEffect(() => {
		if (isOpen) setY(0);
		else setY(height + 500);
	}, [isOpen]);

	return (
		<>
			<motion.div
				className={twMerge(
					"bg-white dark:bg-slate-900 h-[700px] w-[400px] shadow-lg fixed bottom-20 right-8 max-sm:right-0 max-sm:w-full z-10 rounded-2xl",
					isOpen ? "block" : "hidden",
				)}
				animate={{ x: 0, y, opacity: isOpen ? 1 : 0 }}
				transition={{ type: "spring", stiffness: 100, damping: 15 }}
			>
				<header className=" min-h-16 bg-slate-900 dark:bg-slate-100 rounded-t-2xl flex justify-center items-center p-5">
					{headerComponent}
				</header>
				<main className=" p-5">{mainComponent}</main>
				<footer></footer>
			</motion.div>
			<button
				className={baseClasses}
				onClick={() => {
					isOpen ? setIsOpen(false) : setIsOpen(true);
					onclick?.();
				}}
			>
				{isOpen ? <IoCloseSharp /> : icon}
			</button>
		</>
	);
}
