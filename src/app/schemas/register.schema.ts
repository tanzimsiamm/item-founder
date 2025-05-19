import { z } from "zod";

const RegisterValidationSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobileNumber: z
    .string()
    .regex(/^(\+?\d{10,15})$/, "Invalid mobileNumber number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default RegisterValidationSchema;
