import { AppDataSource } from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";
const deleteCommentService = async (idRemove: string): Promise<any> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comment = await commentRepository.findOne({
    where: { id: idRemove },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  await commentRepository.remove(comment);

  return {};
};

export default deleteCommentService;
