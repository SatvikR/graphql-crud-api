import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Supplier } from "./Supplier";

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  supplierId: number;

  @ManyToOne(() => Supplier, (supplier) => supplier.products)
  @JoinColumn({ name: "supplierId" })
  supplier: Supplier;
}
