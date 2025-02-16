import Footer from "@/components/features/Footer";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import Speakers from "@/components/features/Speakers";
import Sponsors from "@/components/features/Sponsors";
import Merch from "@/components/features/Merch";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Location />
			<Speakers />
			<Sponsors />
			<Merch />
			<Footer />
		</div>
	);
}
