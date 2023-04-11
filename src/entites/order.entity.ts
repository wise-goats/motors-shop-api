
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  
  
} from "typeorm";
import { User } from "./user.entity";

@Entity("order")
class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "buyer" })
  buyer: User;

}

export { Order };







