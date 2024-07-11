import express from "express";
import {
  AccountCreate,
  LoginAccount,
  ProfileDelete,
  ProfileUpdate,
  ViewAllAccount,
  ViewSingleAccount,
} from "../Controller/AccountCTRL.js";

export const AccountRouter = express.Router();

AccountRouter.post("/AccountCreate", AccountCreate);
AccountRouter.post("/LoginAccount", LoginAccount);
AccountRouter.get("/ViewAllAccount", ViewAllAccount);
AccountRouter.get("/ViewSingleAccount/:USERID", ViewSingleAccount);
AccountRouter.put("/ProfileUpdate/:USERID", ProfileUpdate);
AccountRouter.delete("/ProfileDelete/:USERID", ProfileDelete);
