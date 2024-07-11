import express from "express";
import {
  CreateFamilyMember,
  ReadFamilyMembers,
  ReadAllFamilyMembers,
  FindUser,
  BaptismMembers,
  NonBaptismMembers,
} from "../Controller/FormCTRL.js";

export const FormRoutes = express.Router();

//POST
FormRoutes.post("/FindUser", FindUser);
FormRoutes.post("/CreateFamilyMember/:AURTHOR", CreateFamilyMember);

// GET
FormRoutes.get("/ReadFamilyMembers/:PrimaryMobile", ReadFamilyMembers);
FormRoutes.get("/ReadAllFamilyMembers", ReadAllFamilyMembers);
FormRoutes.get("/BaptismMembers", BaptismMembers);
FormRoutes.get("/NonBaptismMembers", NonBaptismMembers);

