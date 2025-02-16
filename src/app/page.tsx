import FAQs from "@/components/features/FAQs";
import Location from "@/components/features/Location";
import Speakers from "@/components/features/Speakers";

export default function Home() {
	return (
		<div>
			<Location />
			<Speakers />
			<FAQs />
		</div>
	);
}
