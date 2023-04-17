import { z } from "zod";

const loginSerializer = z.object({
  email: z.string(),
  password: z.string(),
});

export { loginSerializer };
