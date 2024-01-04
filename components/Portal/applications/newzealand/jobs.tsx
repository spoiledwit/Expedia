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

const Jobs = ({
  form,
  index,
  removeJobs,
}: {
  form: any;
  index: number;
  removeJobs: any;
}) => {
  return (
    <div>
      <h1 className="text-2xl text-gray-900">Job #{index + 1}</h1>
      <FormField
        control={form.control}
        name={`jobs[${index}].startDate`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Start Date</FormLabel>
            <FormControl>
              <Input type="date" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].finishDate`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>End Date</FormLabel>
            <FormControl>
              <Input type="date" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].fullTimeOrPartTime`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Time or Part Time</FormLabel>
            <FormControl>
              <select
              className="block w-full pl-3 pr-10 py-2 text-base border shadow-sm border-gray-200 rounded-md focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm"
              placeholder="" {...field} >
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].designation`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Designation</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].companyName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Company Name</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].cityCountry`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>City and Country</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`jobs[${index}].weeklyWorkingHours`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Weekly Working Hours</FormLabel>
            <FormControl>
              <Input type="text" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button
        onClick={() => {
          removeJobs();
        }}
      >
        Remove
      </Button>
    </div>
  );
};

export default Jobs;
