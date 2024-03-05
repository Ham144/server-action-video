"use server";
import { revalidateTag } from "next/cache";
import { Product } from "@/typings";

export const addProductTodoDatabase = async (e: FormData) => {
	"use server";
	const product = e.get("product")?.toString();
	const price = e.get("price")?.toString();
	if (!product || !price) return;

	const newProduct: Product = {
		product,
		price,
	};

	await fetch("https://65e62ef5d7f0758a76e83db8.mockapi.io/api/products", {
		method: "POST",
		body: JSON.stringify(newProduct),
		headers: {
			"Content-Type": "application/json",
		},
	});
	{
		revalidateTag("products");
	}
};
