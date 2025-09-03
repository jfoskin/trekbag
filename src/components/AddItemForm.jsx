import Button from "./Button";
import { useState } from "react";

export default function AddItemForm({ setItems }) {
	const [itemText, setItemText] = useState("");
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				setItems((items) => [...items, { name: itemText }]);
				setItemText("");
			}}
		>
			<h2>Add a new item </h2>
			<input
				type="text"
				placeholder="Add a new item"
				value={itemText}
				onChange={(event) => {
					setItemText(event.target.value);
				}}
			/>
			<Button>Add to list</Button>
		</form>
	);
}
