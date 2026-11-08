import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

// Temporary: send visitors of the published site to the new domain (keeps /cosmote tool working).
const redirectMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url);
  if (url.hostname === "agelinasavidaki.lovable.app" && !url.pathname.startsWith("/cosmote") && !url.pathname.startsWith("/_serverFn")) {
    return new Response(null, { status: 302, headers: { location: "https://as-coaching.gr/" } });
  }
  return next();
});

export const startInstance = createStart(() => ({
  requestMiddleware: [redirectMiddleware, errorMiddleware],
}));
