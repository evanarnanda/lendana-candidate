import { postRouter } from "./routers/post/post.procedure";
import { settingRouter } from "./routers/setting/setting.procedure";
import { stripeRouter } from "./routers/stripe/stripe.procedure";
import { userRouter } from "./routers/user/user.procedure";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  user: userRouter,
  post: postRouter,
  setting: settingRouter,
  stripe: stripeRouter,
});

export type AppRouter = typeof appRouter;
