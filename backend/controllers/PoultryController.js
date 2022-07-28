import Chick from "../models/Chick.js";
import Poultry from "../models/Poultry.js";

export const createPoulty = async (req, res) => {
  const newPoultry = new Poultry(req.body);
  try {
    await newPoultry.save();
    res.status(200).json(newPoultry);
  } catch (error) {
    console.log(error);
  }
};

export const getPoultryDetails = async (req, res) => {
  try {
    const poultry = await Poultry.findById(req.params.id);
    res.status(200).json(poultry);
  } catch (error) {
    console.log(error);
  }
};

export const addChick = async (req, res) => {
  const chick = new Chick(req.body);
  try {
    await chick.save();
    res.status(200).json(chick);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getPoultries = async (req, res) => {
  try {
    const poultries = await Poultry.find({}).sort();
    res.status(200).json(poultries);
  } catch (error) {
    console.log(error);
  }
};

export const updatePoultry = async (req, res) => {
  const id = req.params.id;
  const { currentUserId, currentUserAdminStatus } = req.body;

  // if (id === currentUserId || currentUserAdminStatus) {
  try {
    let poultry = await Poultry.findById(id);
    if (!poultry) {
      res.status(404).json("Poultry not found");
    }
    poultry = await Poultry.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(poultry);
  } catch (error) {
    res.status(500).json(error);
  }
  // }
};
