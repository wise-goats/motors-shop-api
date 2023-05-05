import { Request, Response } from "express";
import createCommentService from "../services/comments/createComment.service";
import listCommentsByIdService from "../services/comments/listCommentById.service";

const createCommentController = async (req: Request, res: Response) => {
  const advertiseId = req.params.id;
  const userId = req.user.id;
  const commentData = req.body;

  const registerComment = await createCommentService(
    advertiseId,
    userId,
    commentData
  );

  return res.status(201).json(registerComment);
};

const listCommentController = async (req: Request, res: Response) => {
  const advertiseId = req.params.id;

  const listComments = await listCommentsByIdService(advertiseId);

  return res.json(listComments);
};
export { createCommentController, listCommentController };
