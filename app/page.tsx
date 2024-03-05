"use client";
import { addProductTodoDatabase } from "@/action/serverAction";
import AddProductButton from "@/components/AddProductButton";
import { Product } from "@/typings";
import { useState } from "react";

const Home = () => {
	const [input, setInput] = useState("");
	const fetchingProducts = async () => {
		const res = await fetch(
			"https://65e62ef5d7f0758a76e83db8.mockapi.io/api/products",
			{
				cache: "no-cache",
				next: {
					tags: ["products"],
				},
			}
		);

		const products: Product[] = await res.json();

		return (
			<div className="flex flex-wrap gap-5">
				{products.map((product: Product) => (
					<div className="p-5 shadow" key={product.id}>
						<p>{product.product}</p>
						<p>{product.price}</p>
					</div>
				))}
			</div>
		);
	};
	return (
		<main className="">
			<h1 className="text-3xl font-bold text-center">Product Warehouse</h1>

			<AddProductButton />

			<form
				action={addProductTodoDatabase}
				className="flex flex-col max-w-xl mx-auto gap-5 p-5"
			>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					name="product"
					placeholder="masukkan nama produk"
					className="border border-gray-300 p-2 rounded-md"
				/>
				<input
					value={input}
					onChange={(e) => setInput(e.target.value)}
					name="price"
					placeholder="masukkan harga produk"
					className="border border-gray-300 p-2 rounded-md"
				/>
				<button type="submit" className="button-blue">
					Add product
				</button>
			</form>
			<h2 className="font-bold p-5">List of Products</h2>
			{fetchingProducts()}
		</main>
	);
};

export default Home;
