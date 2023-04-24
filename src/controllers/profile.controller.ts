import { Request, Response } from "express";
import showProfileService from "../services/profile/showProfile.service";

const showProfileController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = req.user.id;
  const profile = await showProfileService(userId);

  return res.json(profile);
};
export default showProfileController;
