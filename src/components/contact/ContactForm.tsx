"use client";
import React, { FC } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/Dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { Button } from "../ui/Button";
import { Form, Formik } from "formik";
import { Input } from "../ui/form/Input";
import { useToast } from "@/hooks/useToast";
import useFieldValidation from "@/hooks/useValidation";
import * as yup from "yup"

interface FormValues {
	email: string;
	name: string;
	subject: string;
	message: string;
}

const initialValues = {
	email: "",
	name: "",
	subject: "",
	message: "",
};

const ContactForm: FC = () => {
	const { toast } = useToast();
	const yupField = useFieldValidation()
 
	const postEmail = async (values: FormValues, resetForm: () => void) => {
		const res = await fetch("/api/post-email", { method: "POST", body: JSON.stringify(values) });
		if (!res.ok) {
			toast({
				variant: "destructive",
				title: "Sorry, there was an error during your sending email.",
				description: "Please, try it again later.",
			});
			return;
		}
		toast({
			variant: "default",
			title: "Success!",
			description: "Your email was successfully sended!",
		});
		resetForm();
	};

	const validationSchema = yup.object({
		email: yupField.email.required,
		name: yupField.string.required,
		subject: yupField.string.required,
		message: yupField.string.required
	})

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size="lg" className="mt-4 sm:mt-2 lg:w-full">
					Contact me
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Send me a email</DialogTitle>
					<DialogDescription>I will write back within 5 working days at the latest</DialogDescription>
				</DialogHeader>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={async (values: FormValues, { resetForm }) => await postEmail(values, resetForm)}
				>
					{({ isSubmitting }) => (
						<Form className="flex flex-col gap-5">
							<Input name="email" label="Email address*" />
							<Input name="name" label="Name*" />
							<Input name="subject" label="Subject*" />
							<Input name="message" label="Message*" />

							<Button loading={isSubmitting} type="submit">
								Submit
							</Button>
						</Form>
					)}
				</Formik>
			</DialogContent>
		</Dialog>
	);
};

export default ContactForm;
