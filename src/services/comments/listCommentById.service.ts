import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { Comment } from "../../entities/comment.entity";

const listCommentsByIdService = async (advertiseId: string) => {
  const advertsementRepository = AppDataSource.getRepository(Advertisement);

  const comments = advertsementRepository.find({
    where: { id: advertiseId },
    relations: ["comments", "comments.user"],
  });

  return comments;
};

export default listCommentsByIdService;
