"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa6";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupFormSchema } from "@/lib/schema/SignupFormSchema";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

type FormValues = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [serverErrors, setServerErrors] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(signupFormSchema),
  });

  const form = useForm<FormValues>();

  //   const { data: session } = useSession();
  const router = useRouter();

  //   if (session) {
  //     router.replace("/");
  //     return null;
  //   }

  async function onSubmit(values: FormValues) {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    const register = await fetch("/api/auth/register", options);

    if (register.status === 409) {
      setServerErrors("Email is already registered");
    }

    if (register.status === 500) {
      setServerErrors("Server error, try again later");
    }

    if (register.ok) {
      router.push("/signin");
    }
  }

  return (
    <>
      <div className="mx-auto flex flex-col bg-gray-100 items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <a
          href="#"
          className="p-4 flex items-center text-2xl font-semibold text-black">
          {/* <Image className="mr-2 h-8 w-8" src={Img} alt="logo" /> */}
          PesaIQ
        </a>
        <div className="w-full rounded-lg bg-white shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-3 p-6 sm:p-8 md:space-y-5">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign up to have an account
            </h1>
            {serverErrors && (
              <div
                className="mb-4 rounded-lg border border-red-600 bg-red-50 p-4 text-sm text-red-800"
                role="alert">
                {serverErrors}
              </div>
            )}
            <Form {...form}>
              <form
                className="space-y-3"
                onSubmit={form.handleSubmit(onSubmit)}>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            id="name"
                            className="focus:border-2 focus:border-blue-600"
                            placeholder="John Doe"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span className="absolute bottom-2 right-0 flex cursor-pointer items-center pr-3 text-gray-600">
                    <FaUser size={18} />
                  </span>
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            id="email"
                            className="focus:border-2 focus:border-blue-600"
                            placeholder="johndoe@gmail.com"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span className="absolute bottom-2 right-0 flex cursor-pointer items-center pr-3 text-gray-600">
                    <HiAtSymbol size={20} />
                  </span>
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            id="password"
                            className="focus:border-2 focus:border-blue-600"
                            placeholder="••••••••"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${
                      !showPassword ? `text-gray-600` : `text-blue-600`
                    } absolute bottom-2 right-0 flex cursor-pointer items-center pr-3`}>
                    <HiFingerPrint size={20} />
                  </span>
                </div>
                <div className="relative">
                  <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            id="confirm_password"
                            className="focus:border-2 focus:border-blue-600"
                            placeholder="••••••••"
                            {...field}
                            required
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className={`${
                      !showPassword ? `text-gray-600` : `text-blue-600`
                    } absolute bottom-2 right-0 flex cursor-pointer items-center pr-3`}>
                    <HiFingerPrint size={20} />
                  </span>
                </div>
                <Button className="w-full" type="submit">
                  Sign Up
                </Button>
                <div className="text-sm font-light text-black">
                  Have an account?
                  <Link
                    href="/signin"
                    className="font-medium text-blue-600 hover:underline">
                    &nbsp;Sign In
                  </Link>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
