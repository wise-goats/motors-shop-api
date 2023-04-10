
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne
    
  } from "typeorm";
import { Advertise } from "./advertise.entity";
  
  
  @Entity("images")
  class Image {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "blob" })
    image: Buffer;

    @ManyToOne(() => Advertise, (advertise) => advertise.images)
    advertise: Advertise;
}
  
  export { Image };
  
  
  
  
  
  
  
  