import FAQs from "@/components/features/FAQs";
import Agenda from "@/components/features/Agenda";
import Footer from "@/components/features/Footer";
import CtaBanner from "@/components/features/CtaBanner";
import Location from "@/components/features/Location";
import Navbar from "@/components/features/Navbar";
import Speakers from "@/components/features/Speakers";
import Merch from "@/components/features/Merch";
import { Hero } from "@/components/features/Hero";
import AboutUs from "@/components/features/AboutUs";

export default function Home() {
	return (
		<div>
			<Navbar />
			<Hero />
			<section id="about">
				<AboutUs />
			</section>
			<Location />
			<section id="speakers">
				<Speakers />
			</section>
			<section id="agenda">
				<Agenda />
			</section>
			<section id="merch">
				<Merch />
			</section>
			<section id="faqs">
				<FAQs />
			</section>
			<CtaBanner />
			<Footer />
		</div>
	);
}
