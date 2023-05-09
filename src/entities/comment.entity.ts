import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Advertisement } from "./advertisement.entity";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.comments, {
    onDelete: "CASCADE",
  })
  advertisement: User;

  @ManyToOne(() => User, (user) => user.comments, {
    onDelete: "CASCADE",
  })
  user: User;
}

export { Comment };
