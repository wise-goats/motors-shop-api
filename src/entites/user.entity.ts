import { hashSync } from "bcryptjs";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  OneToMany,
  
} from "typeorm";
import { Address } from "./address.entity";
import { Order } from "./order.entity";
import { Advertise } from "./advertise.entity";
import { Comment } from "./comment.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  cpf: string;

  @Column()
  birthDate: Date;

  @Column()
  isSeller: boolean;

  @Column()
  description: string;
 
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @OneToMany(() => Advertise, (advertise) => advertise.user)
  advertise: Advertise[];

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

}

export { User };







