import { http, HttpResponse } from "msw";
import PRODUCTS from "./data";

export const handlers = [
  http.get("https://mock.com/products", () => {
    return HttpResponse.json(PRODUCTS);
  }),
];
