"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    countries: z.array(z.string()),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const CreateUser = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      countries: [],
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsSubmitting(true);
      await axios.post("/api/register", values);
      toast({
        title: "Account Created",
        description: "Your account has been created",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: error.response.data.message,
        description: "Please try again with a different email address",
      });
      console.log(error);
    }
    setIsSubmitting(false);
    form.reset();
  }

  const countries = [
    "New Zealand Work Permit Process",
    "Lithuania Work Permit process",
    "Canada Work Permit Process Unskilled",
    "Canada Work Permit Process Skilled",
    "Canada Work Permit Process PR",
    "Poland Work Permit Process",
    "Czech Republic",
    "Australia",
    "UK Work Permit",
    "Malta Work Permit",
    "Finland Work Permit",
  ];

  const handleCountryChange = (country: string, checked: boolean) => {
    const currentSelectedCountries = form.getValues("countries") as string[];
    if (checked) {
      form.setValue("countries", [...currentSelectedCountries, country]);
    } else {
      form.setValue(
        "countries",
        currentSelectedCountries.filter((c) => c !== country)
      );
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-xl mb-2">Create a new user account.</h1>
      <div className=" min-w-[300px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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

            <div>
              <FormLabel>Select Countries/Process</FormLabel>
              <br />
              {countries.map((country) => (
                <div key={country} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      handleCountryChange(country, e.target.checked)
                    }
                  />
                  <label>{country}</label>
                </div>
              ))}
            </div>

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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateUser;
