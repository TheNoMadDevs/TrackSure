import { z } from 'zod';

const userSignUpSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string(),
    phoneNumber: z.string(),
    address: z.string(),
});

const userSignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

type userSignUpType = z.infer<typeof userSignUpSchema>;

type userSignInType = z.infer<typeof userSignInSchema>;

export { userSignUpSchema, userSignInSchema };
export type { userSignUpType, userSignInType };
