import { z } from "zod";

 const LoginValidationSchema = z.object({
  email: z.string().trim().email("Invalid email address"),
  password: z.string().trim().min(6, "Password must be at least 6 characters long"),
});

export default LoginValidationSchema;