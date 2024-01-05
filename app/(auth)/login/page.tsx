"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitting(true);
    const { email, password } = values;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      toast({
        title: result.error,
        description: "Please try again.",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: "You have successfully logged in.",
      });
      window.location.href = "/";
    }
    setIsSubmitting(false);
  }

  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h1 className="text-3xl font-semibold mb-8">
        Welcome{" "}
        <span className="text-white bg-yellow-500 px-2 italic">Back!</span>{" "}
      </h1>
      <div className=" min-w-[300px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-gray-400 hover:text-gray-600">
                Forgot password?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <Link
                href="/register"
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Don't have an account? Sign up
              </Link>
            </div>
            <Button type="submit">
              {isSubmitting ? "Submitting..." : "Login"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Login;
