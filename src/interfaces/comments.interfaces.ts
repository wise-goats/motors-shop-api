import { iAdvertisement } from "./adverticements.interfaces";
import { IUser } from "./users.interfaces";

interface INewCommentRequest {
  description: string;
}

interface IComment {
  id: string;
  decription: string;
  advertisement: iAdvertisement;
  user: IUser;
  createdAt: Date;
}

export { INewCommentRequest, IComment };
