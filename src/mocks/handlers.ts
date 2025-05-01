import { http, HttpResponse } from "msw";
import PRODUCTS from "./data";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://mock.com/products", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(JSON.stringify(PRODUCTS));
  }),
];
