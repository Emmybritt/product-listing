"use server";

import axios from "axios";
import { unstable_noStore } from "next/cache";
import { Product } from "../../../domain/product";

const baseUrl = "https://fake-store-api.mock.beeceptor.com/api/products";

export const getProducts = async (): Promise<Product[]> => {
  unstable_noStore(); // ensures dynamic site generation
  try {
    const results = await axios.get(baseUrl);
    return results.data;
  } catch (error: any) {
    throw new Error("Failed to fetch products");
  }
};
