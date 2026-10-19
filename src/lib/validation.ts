import { z } from "zod";

export const categories = ["road", "drain", "water", "sanitation", "light", "other"] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "name").max(80, "name"),
  phone: z
    .string()
    .trim()
    .max(15, "phone")
    .regex(/^[0-9+\-\s]*$/, "phone"),
  neighborhood: z.string().trim().min(2, "neighborhood").max(120, "neighborhood"),
  category: z.enum(categories, { message: "category" }),
  message: z.string().trim().min(10, "message").max(1000, "message"),
  consent: z.boolean().refine((value) => value, { message: "consent" }),
  company: z.string().optional(),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
