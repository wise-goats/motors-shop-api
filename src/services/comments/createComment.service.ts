import { AppDataSource } from "../../data-source";
import { Advertisement } from "../../entities/advertisement.entity";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/user.entity";
import { INewCommentRequest } from "../../interfaces/comments.interfaces";

const createCommentService = async (
  advertiseId: string,
  userId: string,
  commentData: INewCommentRequest
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);
  const advertsementRepository = AppDataSource.getRepository(Advertisement);
  const findUser: User | null = await userRepository.findOne({
    where: { id: userId },
  });

  const findAdvertisement: Advertisement | null =
    await advertsementRepository.findOne({ where: { id: advertiseId } });

  const commentCreated = commentRepository.create({
    ...commentData,
    user: findUser!,
    advertisement: findAdvertisement!,
  });
  await commentRepository.save(commentCreated);

  return commentCreated;
};
export default createCommentService;
