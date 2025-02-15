import CtaBanner from "@/components/features/CtaBanner";
import Location from "@/components/features/Location";
import Speakers from "@/components/features/Speakers";

export default function Home() {
	return (
		<div>
			<Location />
			<Speakers />
			<CtaBanner />
		</div>
	);
}
