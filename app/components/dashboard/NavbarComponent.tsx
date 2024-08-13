import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import NavbarLink from "./NavbarLink";
import NavbarProfile from "./NavbarProfile";

export const DashboardNavbar = async () => {
	const {getUser} = getKindeServerSession();
	const user = await getUser();
	if(!user || user.email !== process.env.ADMIN_MAIL_1 || user.email !== process.env.ADMIN_MAIL_2) {
		return redirect("/");
	}

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
				<NavbarProfile />
			</header>
		</>
	);
};
