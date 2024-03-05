"use client";

import { addProductTodoDatabase } from "@/action/serverAction";
import { useTransition } from "react";

const AddProductButton = () => {
	const [isPending, startTransition] = useTransition();

	const formData = new FormData();
	formData.append("product", "Macbook Pro");
	formData.append("price", "1299");

	return (
		<button
			onClick={() => startTransition(() => addProductTodoDatabase(formData))}
			className="fixed bottom-10 right-10 border button-green"
		>
			{isPending ? "menambahkan.." : "Macbook pro"}
		</button>
	);
};

export default AddProductButton;
