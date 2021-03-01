import { Field, InputType, Int } from "type-graphql";

@InputType()
export class ProductInput {
  @Field()
  name: string;

  @Field(() => Int)
  supplierId: number;
}

@InputType()
export class UpdateProductInput {
  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  supplierId?: number;
}
