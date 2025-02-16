import Footer from "@/components/features/Footer";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import Speakers from "@/components/features/Speakers";
import Merch from "@/components/features/Merch";
import { Hero } from "@/components/features/Hero";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Location />
			<Speakers />
			<Merch />
			<Footer />
		</div>
	);
}
