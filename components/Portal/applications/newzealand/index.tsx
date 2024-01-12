"use client";
import { useState } from "react";
import PersonalInfo from "./personalInfo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Education from "./education";
import * as z from "zod";
import { Form } from "@/components/ui/form";
import Jobs from "./jobs";
import Relatives from "./relative";
import SpousePersonalInfo from "./spousePersonalInfo";
import Children from "./children";
import PassportUploader from "./Uploaders/passportUploader";
import { useToast } from "@/components/ui/use-toast";
import CvUploader from "./Uploaders/CVUploader";
import { sendApplication } from "@/lib/actions/newzealand";

const NewzealandApplication = () => {
  const { toast } = useToast();

  const formSchema = z.object({
    surname: z.string().min(1, { message: "required" }),
    givenName: z.string().min(1, { message: "required" }),
    dob: z.string().min(1, { message: "required" }),
    placeOfBirth: z.string().min(1, { message: "required" }),
    cityCountry: z.string().min(1, { message: "required" }),
    nationality: z.string().min(1, { message: "required" }),
    nic: z.string().nullable().optional(),
    nicDateOfIssue: z.string().optional(),
    nicDateOfExpiry: z.string().optional(),
    passportNumber: z.string().min(1, { message: "required" }),
    passportDateOfIssue: z.string().min(1, { message: "required" }),
    passportDateOfExpiry: z.string().min(1, { message: "required" }),
    passportCityOfIssue: z.string().min(1, { message: "required" }),
    currentResidentialAddress: z.string().min(1, { message: "required" }),
    contactNumber: z.string().min(1, { message: "required" }),
    education: z.array(
      z.object({
        masterOrBachelors: z.string().min(1, { message: "required" }),
        startYearMonth: z.string().min(1, { message: "required" }),
        EndYearMonth: z.string().min(1, { message: "required" }),
        AcademicYears: z.string().min(1, { message: "required" }),
        universityName: z.string().min(1, { message: "required" }),
        cityCountry: z.string().min(1, { message: "required" }),
        specialization: z.string().min(1, { message: "required" }),
        fullTimeOrPartTime: z.string().min(1, { message: "required" }),
      })
    ),
    jobs: z.array(
      z.object({
        startDate: z.string().min(1, { message: "required" }),
        finishDate: z.string().min(1, { message: "required" }),
        fullTimeOrPartTime: z.string().min(1, { message: "required" }),
        designation: z.string().min(1, { message: "required" }),
        companyName: z.string().min(1, { message: "required" }),
        cityCountry: z.string().min(1, { message: "required" }),
        weeklyWorkingHours: z.string().min(1, { message: "required" }),
      })
    ),
    relative: z.object({
      fullName: z.string(),
      relationship: z.string(),
      immigrationStatusInNewzealand: z.string(),
      addressInNewzealand: z.string(),
      phoneNumber: z.string(),
      email: z.string(),
    }),

    // Spouse Information
    spouseSurname: z.string(),
    spouseGivenName: z.string(),
    spouseDob: z.string(),
    spousePlaceOfBirth: z.string(),
    spouseCityCountry: z.string(),
    spouseNationality: z.string(),
    spouseNic: z.number().nullable().optional(),
    spouseNicDateOfIssue: z.string().optional(),
    spouseNicDateOfExpiry: z.string().optional(),
    spousePassportNumber: z.string(),
    spousePassportDateOfIssue: z.string(),
    spousePassportDateOfExpiry: z.string(),
    spousePassportCityOfIssue: z.string(),
    spouseCurrentResidentialAddress: z.string(),
    spouseContactNumber: z.string(),
    children: z.array(
      z.object({
        surname: z.string(),
        givenName: z.string(),
        dob: z.string(),
        placeOfBirth: z.string(),
        cityAndCountry: z.string(),
        nationality: z.string(),
        nic: z.string().nullable().optional(),
        nicDateOfIssue: z.string().optional(),
        nicDateOfExpiry: z.string().optional(),
        passportNumber: z.string(),
        passportDateOfIssue: z.string(),
        passportDateOfExpiry: z.string(),
        passportCityOfIssue: z.string(),
        currentResidentialAddress: z.string(),
        education: z.string(),
        currentGradeInSchool: z.string(),
      })
    ),
    passportImage: z.string().min(1, { message: "required" }),
    cvPdf: z.string().min(1, { message: "required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      surname: "",
      givenName: "",
      dob: "",
      placeOfBirth: "",
      cityCountry: "",
      nationality: "",
      nic: null,
      nicDateOfIssue: "",
      nicDateOfExpiry: "",
      passportNumber: "",
      passportCityOfIssue: "",
      passportDateOfExpiry: "",
      passportDateOfIssue: "",
      contactNumber: "",
      currentResidentialAddress: "",
      education: [
        {
          masterOrBachelors: "",
          startYearMonth: "",
          EndYearMonth: "",
          AcademicYears: "",
          universityName: "",
          cityCountry: "",
          specialization: "",
          fullTimeOrPartTime: "",
        },
      ],
      jobs: [
        {
          startDate: "",
          finishDate: "",
          fullTimeOrPartTime: "",
          designation: "",
          companyName: "",
          cityCountry: "",
          weeklyWorkingHours: "",
        },
      ],
      relative: {
        fullName: "",
        relationship: "",
        immigrationStatusInNewzealand: "",
        addressInNewzealand: "",
        phoneNumber: "",
        email: "",
      },
      spouseSurname: "",
      spouseGivenName: "",
      spouseDob: "",
      spousePlaceOfBirth: "",
      spouseCityCountry: "",
      spouseNationality: "",
      spouseNic: 0,
      spouseNicDateOfIssue: "",
      spouseNicDateOfExpiry: "",
      spousePassportNumber: "",
      spousePassportDateOfIssue: "",
      spousePassportDateOfExpiry: "",
      spousePassportCityOfIssue: "",
      spouseContactNumber: "",
      spouseCurrentResidentialAddress: "",
      passportImage: "",
      cvPdf: "",
      children: [
        {
          surname: "",
          givenName: "",
          dob: "",
          placeOfBirth: "",
          cityAndCountry: "",
          nationality: "",
          nic: "",
          nicDateOfIssue: "",
          nicDateOfExpiry: "",
          passportNumber: "",
          passportDateOfIssue: "",
          passportDateOfExpiry: "",
          passportCityOfIssue: "",
          currentResidentialAddress: "",
          education: "",
          currentGradeInSchool: "",
        }
      ]
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      await sendApplication(values);
      toast({
        title: "Success",
        description: "Application submitted successfully",
      });
    } catch (error:any) {
      toast({
        title: "Error",
        description: error.response.data.message,
        variant: "destructive",
      });
    }
  }

  const [step, setStep] = useState(1);
  const [noOfEducation, setNoOfEducation] = useState(1);
  const [noOfJobs, setNoOfJobs] = useState(1);
  const [noOfChildren, setNoOfChildren] = useState(1);

  const removeEducation = (index:number) => {
    setNoOfEducation(noOfEducation - 1);
  
    // Create a deep copy of the current education array
    const updatedEducationArray = [...form.getValues('education')];
  
    // Remove the education entry at the specified index
    updatedEducationArray.splice(index, 1);
  
    // Update the form state with the new array
    form.setValue('education', updatedEducationArray);
  
    // Optionally trigger form validation after state update
    form.trigger('education');
  };

  const addEducation = () => {
    if (noOfEducation >= 5) {
      // Optionally show a message if there's a maximum limit
      toast({
        title: "Limit Reached",
        description: `You can only add up to ${5} education entries.`,
        variant: "destructive",
      });
      return;
    }
  
    setNoOfEducation(noOfEducation + 1);
  
    // Create a deep copy of the current education array and add a new entry
    const updatedEducationArray = [
      ...form.getValues('education'),
      {
        masterOrBachelors: "",
        startYearMonth: "",
        EndYearMonth: "",
        AcademicYears: "",
        universityName: "",
        cityCountry: "",
        specialization: "",
        fullTimeOrPartTime: "",
      }
    ];
  
    // Update the form state with the new array
    form.setValue('education', updatedEducationArray);
  };

  const removeJobs = (index:number) => {
    setNoOfJobs(noOfJobs - 1);
  
    // Create a deep copy of the current jobs array
    const updatedJobsArray = [...form.getValues('jobs')];
  
    // Remove the jobs entry at the specified index
    updatedJobsArray.splice(index, 1);
  
    // Update the form state with the new array
    form.setValue('jobs', updatedJobsArray);
  
    // Optionally trigger form validation after state update
    form.trigger('jobs');
  }

  const addJobs = () => {
    if (noOfJobs >= 5) {
      // Optionally show a message if there's a maximum limit
      toast({
        title: "Limit Reached",
        description: `You can only add up to ${5} jobs entries.`,
        variant: "destructive",
      });
      return;
    }
  
    setNoOfJobs(noOfJobs + 1);
  
    // Create a deep copy of the current jobs array and add a new entry
    const updatedJobsArray = [
      ...form.getValues('jobs'),
      {
        startDate: "",
        finishDate: "",
        fullTimeOrPartTime: "",
        designation: "",
        companyName: "",
        cityCountry: "",
        weeklyWorkingHours: "",
      }
    ];
  
    // Update the form state with the new array
    form.setValue('jobs', updatedJobsArray);
  }

  const removeChildren = (index:number) => {
    setNoOfChildren(noOfChildren - 1);
  
    // Create a deep copy of the current children array
    const updatedChildrenArray = [...form.getValues('children')];
  
    // Remove the children entry at the specified index
    updatedChildrenArray.splice(index, 1);
  
    // Update the form state with the new array
    form.setValue('children', updatedChildrenArray);
  
    // Optionally trigger form validation after state update
    form.trigger('children');
  }

  const addChildren = () => {
    const MAX_CHILDREN_ENTRIES = 5; // Define the maximum number of children entries allowed
    
    if (noOfChildren >= MAX_CHILDREN_ENTRIES) {
      // Show a message if the maximum limit is reached
      toast({
        title: "Limit Reached",
        description: `You can only add up to ${MAX_CHILDREN_ENTRIES} children entries.`,
        variant: "destructive",
      });
      return;
    }
  
    setNoOfChildren(noOfChildren + 1);
  
    // Create a deep copy of the current children array and add a new entry
    const updatedChildrenArray = [
      ...form.getValues('children'),
      {
        surname: "",
        givenName: "",
        dob: "",
        placeOfBirth: "",
        cityAndCountry: "",
        nationality: "",
        nic: "",
        nicDateOfIssue: "",
        nicDateOfExpiry: "",
        passportNumber: "",
        passportDateOfIssue: "",
        passportDateOfExpiry: "",
        passportCityOfIssue: "",
        currentResidentialAddress: "",
        education: "",
        currentGradeInSchool: "",
      }
    ];
  
    // Update the form state with the new array
    form.setValue('children', updatedChildrenArray);
  };
  

  const stepsValidation = async () => {
    // Define the fields for each step
    const stepFields:any = {
      1: [
        "surname",
        "givenName",
        "dob",
        "placeOfBirth",
        "cityCountry",
        "nationality",
        "passportNumber",
        "passportCityOfIssue",
        "passportDateOfExpiry",
        "passportDateOfIssue",
        "contactNumber",
        "currentResidentialAddress",
      ],
      2: ["education"], 
      3: ["jobs"],
      4: ["relative"],
      5: [
        "spouseSurname",
        "spouseGivenName",
        "spouseDob",
        "spousePlaceOfBirth",
        "spouseCityCountry",
        "spouseNationality",
        "spousePassportNumber",
        "spousePassportCityOfIssue",
        "spousePassportDateOfExpiry",
        "spousePassportDateOfIssue",
        "spouseContactNumber",
        "spouseCurrentResidentialAddress",
      ],
      6: ["children"],
      7: ["passportImage"],
      8: ["cvPdf"],
    };

    // Determine which fields to validate based on the current step
    const fieldsToValidate = stepFields[step] || [];

    // Trigger validation for the current step's fields
    const result = await form.trigger(fieldsToValidate);
    if (step === 2) {
      // Additional check for the education array length
      if (form.getValues("education").length === 0) {
        toast({
          title: "Education is required",
          description: "Please add at least one education entry",
          variant: "destructive",
        });
        return;
      }
    }

    if (step === 3) {
      // Additional check for the jobs array length
      if (form.getValues("jobs").length === 0) {
        toast({
          title: "Jobs is required",
          description: "Please add at least one jobs entry",
          variant: "destructive",
        });
        return;
      }
    }

    if (result) {
      // Proceed to the next step if all validations pass
      setStep(step + 1);
    } else {
      // Handle the validation errors
      toast({
        title: "Validation Error",
        description: "Please correct the errors before proceeding.",
        variant: "destructive",
      });

      // Log out all errors
      console.log(form.formState.errors);
    }
  }
  
  return (
    <div className="flex flex-col">
      <p className="text-sm text-red-500 mb-4">
        <strong>Note: </strong>
        All the information must match with your official documents.
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <>
              <h2>
                <strong>Personal Information</strong>
              </h2>
              <div className=" min-w-[300px]">
                <PersonalInfo form={form} setStep={setStep} />
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                {Array.from(Array(noOfEducation).keys()).map((index) => {
                  return (
                    <Education
                      removeEducation={removeEducation}
                      form={form}
                      index={index}
                      key={index}
                    />
                  );
                })}
                <Button
                  className="mt-3"
                  onClick={addEducation}
                >
                  Add More Education
                </Button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                {Array.from(Array(noOfJobs).keys()).map((index) => {
                  return (
                    <Jobs
                      removeJobs={removeJobs}
                      form={form}
                      index={index}
                      key={index}
                    />
                  );
                })}
                <Button
                  className="mt-3"
                  onClick={addJobs}
                >
                  Add More Jobs
                </Button>
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                <Relatives form={form} />
              </div>
            </>
          )}
          {step === 5 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                <h2>
                  <strong>Spouse Personal Information</strong>
                </h2>
                <SpousePersonalInfo form={form} />
              </div>
            </>
          )}
          {step === 6 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                {Array.from(Array(noOfChildren).keys()).map((index) => {
                  return (
                    <Children
                      removeChildren={removeChildren}
                      form={form}
                      index={index}
                      key={index}
                    />
                  );
                })}
                <Button
                  className="mt-3"
                  onClick={addChildren}
                >
                  Add More Children
                </Button>
              </div>
            </>
          )}
          {step === 7 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                <div className="flex gap-1 flex-col">
                  <h2>
                    <strong>Upload you Passport Front Image</strong>
                  </h2>
                  <p className="text-sm">
                    Upload a clear image of your passport front page. The image
                    would be used to verify your identity.
                  </p>
                </div>
                <PassportUploader form={form} />
              </div>
            </>
          )}
            {step === 8 && (
            <>
              <div className="min-w-[300px] flex flex-col gap-6">
                <div className="flex gap-1 flex-col">
                  <h2>
                    <strong>Upload you CV in PDF Format</strong>
                  </h2>
                  <p className="text-sm">
                    Required Format is PDF Only.
                  </p>
                </div>
                <CvUploader form={form} />
              </div>
            </>
          )}

          {step > 1 && (
            <Button
              className="mr-4"
              onClick={() => {
                setStep(step - 1);
              }}
            >
              Previous Step
            </Button>
          )}
          {step < 8 && (
            <Button
            onClick={stepsValidation}
          >
            Next Step
          </Button>
          )}
          {step === 8 && (
            <Button
              type="submit"
            >
              {form.formState.isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          )}
        </form>
      </Form>
            
    </div>
  );
};

export default NewzealandApplication;