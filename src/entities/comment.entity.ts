import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { User } from "./user.entity";
import { Advertisement } from "./advertisement.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.comments)
  advertisement: User;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}

export { Comment };
