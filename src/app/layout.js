import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="light scroll-smooth" dir="ltr">
			<body className={inter.className + " dark:bg-slate-900 bg-white"}>
				<Navbar />
				{children}
				<Footer />{" "}
			</body>
		</html>
	);
}