import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";

const spousePersonalInfo = ({form}:{form:any}) => {
  return (
    <div>
        <>
      <FormField
        control={form.control}
        name="spouseSurname"
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
        name="spouseGivenName"
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
        name="spouseDob"
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
        name="spousePlaceOfBirth"
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
        name="spouseCityCountry"
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
        name="spouseNationality"
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
        name="spouseNic"
        render={({ field }) => (
          <FormItem>
            <FormLabel>NIC</FormLabel>
            <FormControl>
              <Input 
              type="number"
              {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spouseNicDateOfIssue"
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
        name="spouseNicDateOfExpiry"
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
        name="spousePassportNumber"
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
        name="spousePassportDateOfIssue"
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
        name="spousePassportDateOfExpiry"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Passport Date of Expiry</FormLabel>
            <FormControl>
              <Input 
              type="date"
              {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="spousePassportCityOfIssue"
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
        name="spouseCurrentResidentialAddress"
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
        name="spouseContactNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Number</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
    </div>
  )
}

export default spousePersonalInfo;