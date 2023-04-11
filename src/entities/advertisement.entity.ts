
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

@Entity("advertise")
class Advertise {
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

  @Column({type: "float"})
  fipePrice: number;

  @Column({type: "float"})
  price: number;

  @Column()
  description: string;
  
  @Column()
  isActive: boolean;
 

  @ManyToOne(() => User, (user) => user.addresses)
  user: User;

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @OneToMany(() => Comment, (comment) => comment.advertise)
  comments: Comment[];

  @OneToMany(() => Image, (image) => image.advertise)
  images: Image[];

}

export { Advertise };









