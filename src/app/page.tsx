import Footer from "@/components/features/Footer";
import CtaBanner from "@/components/features/CtaBanner";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import Speakers from "@/components/features/Speakers";
import Merch from "@/components/features/Merch";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Location />
			<Speakers />
			<Merch />
			<CtaBanner />
			<Footer />
		</div>
	);
}
