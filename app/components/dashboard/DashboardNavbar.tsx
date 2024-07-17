"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "Dashboard",
		href: "/dashboard",
	},
	{
		name: "Orders",
		href: "/dashboard/orders",
	},
	{
		name: "Products",
		href: "/dashboard/products",
	},
	{
		name: "Categories",
		href: "/dashboard/categories",
	},
];

export const DashboardNavbar = () => {
	const pathname = usePathname();
	return (
		<>
			<header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
				<nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={cn(
								link.href === pathname
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							)}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</header>
		</>
	);
};
