"use client";
import { Form, Formik } from "formik";
import React, { FC } from "react";

import useFieldValidation from "@/hooks/useValidation";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/useToast";
import client from "@/lib/services/supabase/client/public-client";
import { Input } from "@/components/ui/form/Input";
import { Button } from "@/components/ui/Button";

export interface SignInValues {
  email: string;
  password: string;
}

const initialValues: SignInValues = {
  email: "",
  password: "",
};

const SignInForm: FC = () => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const yupField = useFieldValidation();
  const schema = yup.object({
    email: yupField.email.required,
    password: yupField.string.required.min(6, "Minimum password length is 6"),
  });

  const handleSignIn = async (values: SignInValues) => {
    const { email, password } = values;
    const { error } = await client.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      toast({ title: "Error happened", description: error.message, variant: "destructive" });
      return;
    }
    refresh();
  };

  return (
    <div className="page-container">
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSignIn}>
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-5 border p-10 rounded-md shadow-lg">
            <Input name="email" label="Email*" />
            <Input name="password" label="Password*" type="password" />
            <Button type="submit" loading={isSubmitting}>
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignInForm;
