import { http, HttpResponse } from "msw";
import PRODUCTS from "./data";
import img from "./images/base64-images.json";

export const handlers = [
  http.get("https://mock.com/products", () => {
    return HttpResponse.json(PRODUCTS);
  }),

  http.get("https://mock.com/image/:id", ({ request, params }) => {
    console.log("request: ", request);
    console.log("params: ", params);

    const { id: imageId } = params;

    const base64ImageValue = img[imageId as keyof typeof img];

    return HttpResponse.json(base64ImageValue);
  }),
];
