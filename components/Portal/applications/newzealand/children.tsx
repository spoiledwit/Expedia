import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Children = ({
  form,
  index,
  removeChildren,
}: {
  form: any;
  index: number;
  removeChildren: any;
}) => {
  return (
    <div>
      <h1 className="text-2xl text-gray-900">Child #{index + 1}</h1>
      <>
        <FormField
          control={form.control}
          name={`children[${index}].surname`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surname</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].givenName`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Given Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].dob`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].placeOfBirth`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Place of Birth</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].cityAndCountry`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>City / Country</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].nationality`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nationality</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].nic`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIC</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].nicDateOfIssue`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIC Date of Issue</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].nicDateOfExpiry`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>NIC Date of Expiry</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].passportNumber`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].passportDateOfIssue`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Date of Issue</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={`children[${index}].passportDateOfExpiry`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Date of Expiry</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].passportCityOfIssue`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport City of Issue</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].currentResidentialAddress`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Residential Address</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`children[${index}].education`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Education</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name={`children[${index}].currentGradeInSchool`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Grade In School</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </>
      <Button
      className="mt-6"
      onClick={()=>{
        removeChildren();
      }}
      >
        Remove
      </Button>
    </div>
  );
};

export default Children;
