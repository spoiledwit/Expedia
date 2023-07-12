import mongoose from "mongoose";
import Contact from "../models/Contact.js";

export const getContacts = async (req, res) => {
  try {
    const query = {};
    const contacts = await Contact.find(query);
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createContact = async (req, res) => {
  try {
    const { name, email, phone, jobTitle, country, text } = req.body;
    const contact = new Contact({
      name,
      email,
      phone,
      jobTitle,
      country,
      text,
    });
    await contact.save();
    res.status(201).json({ message: "Contact created successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await Contact.findByIdAndRemove(id)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
