import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
  ManyToOne,
} from "typeorm";
import { Order } from "./order.entity";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { Image } from "./image.entity";

@Entity("advertisements")
class Advertisement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column({ type: "float" })
  mileage: number;

  @Column()
  color: string;

  @Column({ type: "float" })
  fipePrice: number;

  @Column({ type: "float" })
  price: number;

  @Column()
  description: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @OneToMany(() => Comment, (comment) => comment.advertisement, {
    cascade: true,
  })
  comments: Comment[];

  @OneToMany(() => Image, (image) => image.advertisement, { cascade: true })
  images: Image[];

  @ManyToOne(() => User, (user) => user.advertisement)
  user: User;
}

export { Advertisement };
