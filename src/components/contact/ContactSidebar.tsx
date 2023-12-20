import React, { FC } from "react";
import profile from "public/images/profile.jpg";
import Image from "next/image";
import { Button } from "../ui/Button";
import { MEDIA_URLS } from "@/lib/consts/urls";
import ContactForm from "./ContactForm";

const ContactSidebar: FC = () => {
	return (
		<div className="lg:w-[200px] lg:min-w-[200px] sm:w-full flex flex-col sm:items-center gap-5 lg:border-r sm:border-b sm:pb-10 lg:pr-5 sm:flex-row relative">
			<Image
				src={profile}
				alt="Profile photo"
				className="aspect-square rounded-full sm:w-28 h-auto"
			/>
			<div className="flex lg:items-center flex-col">
				<p className="h4 sm:leading-none">Daniel Bílek</p>
				<p className="text-muted-foreground">Front end developer</p>
				<div className="flex">
					{MEDIA_URLS.map((media) => {
						const Icon = media.icon;
						return (
							<Button variant="ghost" key={media.href} asChild size="icon">
								<a href={media.href}>
									<Icon className="w-5 h-5 fill-foreground" />
								</a>
							</Button>
						);
					})}
				</div>
				<ContactForm />
			</div>
			
		</div>
	);
};

export default ContactSidebar;
