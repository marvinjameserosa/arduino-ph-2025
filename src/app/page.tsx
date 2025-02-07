import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";

export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>
			<Button className="text-xl px-11 py-7">Register Now</Button>
			<LampContainer>
				<h2 className="font-morganite uppercase">Featured Speakers</h2>
			</LampContainer>
		</div>
	);
}
