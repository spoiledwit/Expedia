import Assessment from "../models/Assessment.js";

export const getAssessments = async (req, res) => {
  try {
    const query = {};
    const assessments = await Assessment.find(query);
    res.status(200).json(assessments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAssessment = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, country, education, visaType } = req.body;
    console.log("good 0");
    console.log(jobTitle);
    const assessment = new Assessment({
      name,
      email,
      phone,
      jobTitle,
      country,
      education,
      visaType,
    });
    console.log("good 1");
    await assessment.save();
    console.log("good 2");
    res.status(201).json({ message: "Assessment created successfully" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

export const deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Assessment.findByIdAndRemove(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
