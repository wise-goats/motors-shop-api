import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  zipcode: string;

  @ManyToOne(() => User, (user) => user.addresses)
  user: User;
}

export { Address };
