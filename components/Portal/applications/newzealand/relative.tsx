import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Relative = ({ form }: { form: any }) => {
  return (
    <div>
      <h1 className="text-2xl text-gray-900">Relative in the country of Application (If Any)</h1>

      <FormField
        control={form.control}
        name={`relative.fullName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`relative.relationship`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Relationship</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`relative.immigrationStatusInNewzealand`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Immigration Status in Newzealand</FormLabel>
            <FormControl>
              <select
                {...field}
                className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="Citizen">Citizen</option>
                <option value="Permanent Resident">Permanent Resident</option>
                <option value="Work Visa">Work Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Visitor Visa">Visitor Visa</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`relative.addressInNewzealand`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address in Newzealand</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`relative.phoneNumber`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`relative.email`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input type="email" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default Relative;
