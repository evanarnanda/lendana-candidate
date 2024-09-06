import { z } from "zod";

export const getBioDataSchema = z.object({
  userId: z.string().min(1, "Please provide your user id.").max(21),
});

export type GetBioDataInput = z.infer<typeof getBioDataSchema>;