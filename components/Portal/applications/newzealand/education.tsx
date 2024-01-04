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

const Education = ({ form, index, removeEducation }: { form: any; index: number, removeEducation:any }) => {
  return (
    <div
    className="flex flex-col space-y-4"
    >
      <h1 className="text-2xl text-gray-900">Education #{index + 1}</h1>
      <div>
      <FormField
        control={form.control}
        name={`education[${index}].masterOrBachelors`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Master's or Bachelor's Degree (Please select one)
            </FormLabel>
            <FormControl>
              <select
                {...field}
                className="block w-full pl-3 pr-10 py-2 text-base border shadow-sm border-gray-200 rounded-md focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm"
              >
                <option value="masters">Master's</option>
                <option value="bachelors">Bachelor's</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`education[${index}].startYearMonth`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Start Year and Month</FormLabel>
            <FormControl>
              <Input
              type="date"
              placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name={`education[${index}].EndYearMonth`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>End Year and Month</FormLabel>
            <FormControl>
              <Input
              type="date" placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`education[${index}].AcademicYears`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Academic Years</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`education[${index}].universityName`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>University Name</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`education[${index}].cityCountry`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>City and Country</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`education[${index}].specialization`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Specialization</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name={`education[${index}].fullTimeOrPartTime`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Time or Part Time</FormLabel>
            <FormControl>
              <select 
              className="block w-full pl-3 pr-10 py-2 text-base border shadow-sm border-gray-200 rounded-md focus:outline-none focus:ring-primary-gold focus:border-primary-gold sm:text-sm"
              placeholder="" {...field}>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      </div>
      <Button
      onClick={()=>{
        removeEducation();
      }}
      >
        Remove
      </Button>
    </div>
  );
};

export default Education;
