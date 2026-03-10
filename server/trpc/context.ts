import { v4 as uuid } from "uuid";
import type { IncomingMessage } from "http";
import type { H3Event } from "h3";

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export const createContext = async (event: H3Event) => {
  const req = event.node.req;
  const res = event.node.res;

  const requestId = uuid();
  res.setHeader("x-request-id", requestId);

  // Create your context based on the request object
  // Will be available as `ctx` in all your resolvers
  // This is just an example of something you'd might want to do in your ctx fn
  const publicIp = req.socket.remoteAddress || req.headers["x-forwarded-for"];

  return {
    publicIp,
    requestId,
  };
};

export type Context = Awaited<ReturnType<typeof createContext>>;
