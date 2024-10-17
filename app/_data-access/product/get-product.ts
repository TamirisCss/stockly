import "server-only";
import { db } from "@/app/_lib/prisma";
import { Product } from "@prisma/client";

export const getProduct = async (): Promise<Product[]> => {
  return db.product.findMany({});
};