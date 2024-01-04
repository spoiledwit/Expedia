import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  masterOrBachelors: { type: String, required: true },
  startYearMonth: { type: String, required: true },
  EndYearMonth: { type: String, required: true },
  AcademicYears: { type: String, required: true },
  universityName: { type: String, required: true },
  cityCountry: { type: String, required: true },
  specialization: { type: String, required: true },
  fullTimeOrPartTime: { type: String, required: true },
});

const JobSchema = new mongoose.Schema({
  startDate: { type: String, required: true },
  finishDate: { type: String, required: true },
  fullTimeOrPartTime: { type: String, required: true },
  designation: { type: String, required: true },
  companyName: { type: String, required: true },
  cityCountry: { type: String, required: true },
  weeklyWorkingHours: { type: String, required: true },
});

const RelativeSchema = new mongoose.Schema({
  fullName: String,
  relationship: String,
  immigrationStatusInNewzealand: String,
  addressInNewzealand: String,
  phoneNumber: String,
  email: String,
});

const ChildSchema = new mongoose.Schema({
  surname: { type: String, required: true },
  givenName: { type: String, required: true },
  dob: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  cityAndCountry: { type: String, required: true },
  nationality: { type: String, required: true },
  nic: String,
  nicDateOfIssue: String,
  nicDateOfExpiry: String,
  passportNumber: { type: String, required: true },
  passportDateOfIssue: { type: String, required: true },
  passportDateOfExpiry: { type: String, required: true },
  passportCityOfIssue: { type: String, required: true },
  currentResidentialAddress: { type: String, required: true },
  education: { type: String, required: true },
  currentGradeInSchool: { type: String, required: true },
});

const FormSchema = new mongoose.Schema({
  surname: { type: String, required: true },
  givenName: { type: String, required: true },
  dob: { type: String, required: true },
  placeOfBirth: { type: String, required: true },
  cityCountry: { type: String, required: true },
  nationality: { type: String, required: true },
  nic: String,
  nicDateOfIssue: String,
  nicDateOfExpiry: String,
  passportNumber: { type: String, required: true },
  passportDateOfIssue: { type: String, required: true },
  passportDateOfExpiry: { type: String, required: true },
  passportCityOfIssue: { type: String, required: true },
  currentResidentialAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
  education: [EducationSchema],
  jobs: [JobSchema],
  relative: RelativeSchema,
  spouseSurname: { type: String, required: true },
  spouseGivenName: { type: String, required: true },
  spouseDob: { type: String, required: true },
    spousePlaceOfBirth: { type: String, required: true },
    spouseCityCountry: { type: String, required: true },
    spouseNationality: { type: String, required: true },
    spouseNic: String,
    spouseNicDateOfIssue: String,
    spouseNicDateOfExpiry: String,
    spousePassportNumber: { type: String, required: true },
    spousePassportDateOfIssue: { type: String, required: true },
    spousePassportDateOfExpiry: { type: String, required: true },
    spousePassportCityOfIssue: { type: String, required: true },
    spouseCurrentResidentialAddress: { type: String, required: true },
    spouseContactNumber: { type: String, required: true },
    children: [ChildSchema],
    status: { type: String, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true,
});

const NewzealandForm = mongoose.models.Form || mongoose.model('Form', FormSchema);
export default NewzealandForm;