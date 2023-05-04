import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Advertisement } from "./advertisement.entity";

@Entity("images")
class Image {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  image: string;

  @ManyToOne(() => Advertisement, (advertisement) => advertisement.images, {
    onDelete: "CASCADE",
  })
  advertisement: Advertisement;
}

export { Image };
