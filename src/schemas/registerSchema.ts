import { z } from "zod";
const regexRealName = /^[A-Za-z]+\s[A-Za-z]+/;
const regexUsername = /^[a-zA-Z0-9_]+$/;
export const registerSchema = z.object({
  realName: z
    .string()
    .min(3)
    .max(120)
    .regex(regexRealName, "Must be 'Name LastName' without numbers"),
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(
      regexUsername,
      "It can only contain letters, numbers, '_', '-' and '.'"
    ),
  email: z.string().min(5).max(120).email(),
  password: z.string().min(7).max(45),
});
