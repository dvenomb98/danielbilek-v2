import technologies from "@/data/technologies";
import React, { FC } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/Card";

const Technologies: FC = async () => {
	return (
	
			<div className="grid grid-cols-3 grid-row-auto gap-2 sm:flex sm:flex-col sm:gap-5">
				{technologies.map((tec, i) => (
					<Card key={tec.title}>
						<CardHeader>
							<CardTitle>{tec.title}</CardTitle>
							<CardDescription>{tec.description}</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>
		
	);
};

export default Technologies;
