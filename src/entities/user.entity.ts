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
import { Advertisement } from "./advertisement.entity";
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

  @Column({ default: false })
  isSeller: boolean;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  reset_token: string;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }

  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @OneToMany(() => Order, (order) => order.buyer)
  orders: Order[];

  @OneToMany(() => Advertisement, (advertisement) => advertisement.user, {
    cascade: true,
  })
  advertisement: Advertisement[];

  @OneToMany(() => Comment, (comment) => comment.user, { cascade: true })
  comments: Comment[];
}

export { User };
