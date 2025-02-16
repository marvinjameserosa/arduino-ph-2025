"use client";
import React from "react";
import { LampContainer } from "../ui/lamp";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { speakers } from "@/data/index";

const Speakers = () => {
	return (
		<section id="speakers" className="relative container">
			<LampContainer>
				<h2>Featured Speakers</h2>
			</LampContainer>
			<InfiniteMovingCards
				items={speakers}
				direction="right"
				speed="normal"
				className="absolute top-2/4 mt-24"
			/>
		</section>
	);
};

export default Speakers;
