"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

const NavbarLink = () => {
	const pathname = usePathname();
	return (
		<>
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
		</>
	);
};

export default NavbarLink;
