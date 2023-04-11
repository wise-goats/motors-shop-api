
import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    
    
  } from "typeorm";
  import { User } from "./user.entity";
import { Advertise } from "./advertise.entity";
  
  @Entity("comments")
  class Comment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    description: string;

    @ManyToOne(() => Advertise, (advertise) => advertise.comments)
    advertise: User;

    @ManyToOne(() => User, (user) => user.comments)
    user: User;
  
  }
  
  export { Comment };
  
  
  
  
  
  
  
  