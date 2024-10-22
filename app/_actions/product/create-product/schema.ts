import { z } from "zod";
export const createProductSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Product name is required.",
  }),
  price: z.number().min(0.01, {
    message: "Product price is required.",
  }),
  stock: z.coerce
    .number()
    .positive({
      message: "Stock quantity is required.",
    })
    .int()
    .min(0, {
      message: "Stock quantity is required.",
    }),
});
export type CreateProductSchema = z.infer<typeof createProductSchema>;