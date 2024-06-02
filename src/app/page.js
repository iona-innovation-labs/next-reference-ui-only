import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import PerspectiveSwitcher from "./components/utility-components/PerspectiveSwitcher";
import DarkModeSwitcher from "./components/utility-components/DarkModeSwitcher";
import BackToTopButton from "./components/utility-components/BackToTopButton";
import HomePage from "./components/home-page/HomePage";
import Footer from "./components/footer/Footer";

export default function Home() {
	return (
		<>
			<HomePage />
			<DarkModeSwitcher />
			<PerspectiveSwitcher />
			<BackToTopButton />
		</>
	);
}
