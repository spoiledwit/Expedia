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
  surname: { type: String },
  givenName: { type: String },
  dob: { type: String },
  placeOfBirth: { type: String },
  cityAndCountry: { type: String },
  nationality: { type: String },
  nic: String,
  nicDateOfIssue: String,
  nicDateOfExpiry: String,
  passportNumber: { type: String },
  passportDateOfIssue: { type: String },
  passportDateOfExpiry: { type: String },
  passportCityOfIssue: { type: String },
  currentResidentialAddress: { type: String },
  education: { type: String },
  currentGradeInSchool: { type: String },
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
  spouseSurname: { type: String },
  spouseGivenName: { type: String },
  spouseDob: { type: String },
    spousePlaceOfBirth: { type: String },
    spouseCityCountry: { type: String },
    spouseNationality: { type: String },
    spouseNic: String,
    spouseNicDateOfIssue: String,
    spouseNicDateOfExpiry: String,
    spousePassportNumber: { type: String },
    spousePassportDateOfIssue: { type: String },
    spousePassportDateOfExpiry: { type: String},
    spousePassportCityOfIssue: { type: String },
    spouseCurrentResidentialAddress: { type: String },
    spouseContactNumber: { type: String},
    children: [ChildSchema],
    status: { type: String, required: true },
    userId: { type: String, required: true },
}, {
    timestamps: true,
});

const NewzealandForm = mongoose.models.NewzealandForm || mongoose.model('NewzealandForm', FormSchema);
export default NewzealandForm;