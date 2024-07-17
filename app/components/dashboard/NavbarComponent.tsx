import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon } from "lucide-react";
import NavbarLink from "./NavbarLink";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const DashboardNavbar = () => {
	return (
		<>
			<header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white">
				{/* Navbar for large screens */}
				<nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
					<NavbarLink />
				</nav>

				{/* Navbar for medium screens */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								className="shrink-0 md:hidden"
								variant="outline"
								size="icon"
							>
								<MenuIcon className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="left">
							<nav className="flex flex-col gap-6 text-lg font-medium mt-5">
								<NavbarLink />
							</nav>
						</SheetContent>
					</Sheet>
				</div>

				{/* User profile */}
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="secondary"
							size="icon"
							className="rounded-full"
						>
							<CircleUser className="w-5 h-5" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Logout</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</header>
		</>
	);
};
