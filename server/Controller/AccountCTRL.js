import express from "express";
import bcrypt, { genSalt } from "bcrypt";
import { AccountModels } from "../Models/AccountModels.js";
import JWT from "jsonwebtoken";
import ENV from "dotenv";
import { trusted } from "mongoose";

ENV.config();
const JWT_SECRET = process.env.JWT_SECRET;
export const AccountCreate = async (req, res) => {
  try {
    const { UserName, Email, Password, ProfilePicture } = req.body;
    const AccountTest = await AccountModels.findOne({ Email });
    if (AccountTest) {
      return res
        .status(304)
        .json({ success: false, message: "Email Already used" });
    }
    const Gensalt = await bcrypt.genSalt(12);
    const HashedPWD = await bcrypt.hash(Password, Gensalt);

    await AccountModels.create({
      UserName: UserName,
      Email: Email,
      Password: HashedPWD,
      ProfilePicture: ProfilePicture,
    });

    return res.status(200).json({ success: true, message: "Account Created" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const LoginAccount = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const AccountTest = await AccountModels.findOne({ Email });
    if (AccountTest) {
      const PasswordTest = await bcrypt.compare(Password, AccountTest.Password);
      if (PasswordTest) {
        const Token = JWT.sign({ USERID: AccountTest._id }, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({
          success: true,
          message: "Account Login Success",
          Token: Token,
        });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "Password Mismatching" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "Email not Found" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ViewAllAccount = async (req, res) => {
  try {
    const AllAccounts = await AccountModels.find();
    if (!AllAccounts)
      return res
        .status(404)
        .json({ success: false, message: "Account Fetching Problem" });

    res
      .status(200)
      .json({ success: true, message: "All Accounts", accounts: AllAccounts });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ProfileUpdate = async (req, res) => {
  try {
    const { UserName, Email, Password, ProfilePicture } = req.body;
    const { USERID } = req.params;
    const CheckAccount = await AccountModels.findById(USERID);
    if (!CheckAccount)
      return res
        .status(404)
        .json({ success: false, message: "Account Not Found" });

    const Gensalt = await bcrypt.genSalt(12);
    const HashedPWD = await bcrypt.hash(Password, Gensalt);
    await AccountModels.findByIdAndUpdate(USERID, {
      UserName: UserName,
      Email: Email,
      Password: HashedPWD,
      ProfilePicture: ProfilePicture,
    });

    res.status(200).json({ success: true, message: "Profile Updated" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ProfileDelete = async (req, res) => {
  try {
    const { USERID } = req.params;
    const CheckAccount = await AccountModels.findById(USERID);
    if (!CheckAccount)
      return res
        .status(404)
        .json({ success: false, message: "Account Not Found" });

    await AccountModels.findByIdAndDelete(USERID);
    res.status(200).json({ success: true, message: "Profile Deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ViewSingleAccount = async (req, res) => {
  try {
    const { USERID } = req.params;
    const USERIDSTR = String(USERID);
    const Checking = await AccountModels.findById(USERIDSTR);
    if (!Checking) {
      res.status(400).json({ success: false, message: "account not found" });
    } else {
      res
        .status(200)
        .json({ success: true, message: "account founded", account: Checking });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
