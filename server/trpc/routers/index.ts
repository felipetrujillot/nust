import { publicProcedure, router } from "../trpc";
import type { inferRouterOutputs } from "@trpc/server";
/**
 *
 */
export const appRouter = router({
  //usuarios: usuariosTrpc,

  test: publicProcedure.query(() => {
    return "hi";
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutput = inferRouterOutputs<AppRouter>;
export type RouterInput = inferRouterOutputs<AppRouter>;
