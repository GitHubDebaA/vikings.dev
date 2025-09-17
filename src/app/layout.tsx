import "../styles/globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
	title: "Vikings App",
	description: "Starter Next.js project with Tailwind",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow container pt-16">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
