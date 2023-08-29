import z from "zod";

export const contactForm = z.object({
  email: z.string().email(),
  name: z.string().min(3),
  message: z.string().min(10),
  subject: z.string().min(10),
});
