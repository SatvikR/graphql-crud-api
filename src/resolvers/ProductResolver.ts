import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { Product } from "../entities/Product";
import { ProductInput, UpdateProductInput } from "../inputTypes/ProductInput";

@Resolver()
export class ProductResolver {
  @Mutation(() => Product)
  async createProduct(
    @Arg("options", () => ProductInput) options: ProductInput
  ) {
    const newProduct = await Product.create(options).save();
    return newProduct;
  }

  @Query(() => [Product])
  async products() {
    const products = await Product.find();
    return products;
  }

  @Query(() => Product)
  async product(@Arg("id", () => Int) id: number) {
    const product = await Product.findOne({ id });
    return product;
  }

  @Mutation(() => Boolean)
  async udpateProduct(
    @Arg("id", () => Int) id: number,
    @Arg("options", () => UpdateProductInput) options: UpdateProductInput
  ) {
    await Product.update({ id }, options);
    return true;
  }

  @Mutation(() => Boolean)
  async deleteProduct(@Arg("id", () => Int) id: number) {
    await Product.delete({ id });
    return true;
  }
}
