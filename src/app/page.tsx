import Footer from "@/components/features/Footer";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import Speakers from "@/components/features/Speakers";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Location />
			<Speakers />
			<Footer />
		</div>
	);
}
