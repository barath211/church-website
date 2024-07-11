import { AccountModels } from "../Models/AccountModels.js";
import { FormModel } from "../Models/FormDetails.js";

export const CreateFamilyMember = async (req, res) => {
  try {
    const {
      UserName,
      DateOfBirth,
      Mobile,
      PrimaryMobile,
      Address,
      Baptism,
      ProfilePicture,
    } = req.body;
    const { AURTHOR } = req.params;

    const AurthorProfile = await AccountModels.findById(AURTHOR);
    if (!AurthorProfile)
      return res
        .status(404)
        .json({ success: false, message: "Aurthor ID not found" });

    await FormModel.create({
      AuthorBy: AurthorProfile,
      UserName: UserName.toUpperCase(),
      DateOfBirth: DateOfBirth,
      Mobile: Mobile,
      PrimaryMobile: PrimaryMobile,
      Address: Address,
      Baptism: Baptism,
      ProfilePicture: ProfilePicture,
    });
    return res
      .status(200)
      .json({ success: true, message: "Account created successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ReadFamilyMembers = async (req, res) => {
  try {
    const { PrimaryMobile } = req.params;
    const Members = await FormModel.find();
    const FamilyMembers = Members.filter(
      (target) => String(target.PrimaryMobile) === String(PrimaryMobile)
    );

    res.status(200).json({
      success: true,
      message: "Your Family Members",
      FamilyMembers: FamilyMembers,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const ReadAllFamilyMembers = async (req, res) => {
  try {
    const AllFamilyMemebers = await FormModel.find();
    if (!AllFamilyMemebers)
      return res
        .status(404)
        .json({ success: false, message: "Fetching Problem" });

    res.status(200).json({
      success: true,
      message: "Fetching Success",
      allMembers: AllFamilyMemebers,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const FindUser = async (req, res) => {
  try {
    const { Find } = req.body;
    console.log(req.body);
    const UserName = Find.toUpperCase();
    const FindUserSearching = await FormModel.findOne({ UserName });
    if (!FindUserSearching)
      return res
        .status(404)
        .json({ success: false,FindUserSearching, message: "User Name not found" , alluser: (await FormModel.find()).map(target => target.UserName) });

    return res.status(200).json({
      success: true,
      message: "User Name Founded",
      user: FindUserSearching,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const BaptismMembers = async (req, res) => {
  try {
    const AllUsers = await FormModel.find();
    const BaptismUsers = AllUsers.filter((target) => target.Baptism === true);
    return res.status(200).json({
      success: true,
      message: "Baptism Members only",
      members: BaptismUsers,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const NonBaptismMembers = async (req, res) => {
  try {
    const AllUsers = await FormModel.find();
    const NonBaptismUsers = AllUsers.filter(
      (target) => target.Baptism !== true
    );
    return res.status(200).json({
      success: true,
      message: "Non Baptism Members only",
      members: NonBaptismUsers,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};
