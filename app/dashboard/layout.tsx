import React from "react";
import { DashboardNavbar } from "../components/dashboard/NavbarComponent";

const DashboardLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<>
			<div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<DashboardNavbar />
				<main className="my-5">{children}</main>
			</div>
		</>
	);
};

export default DashboardLayout;
