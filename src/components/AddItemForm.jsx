import Button from "./Button";
import { useState, useRef } from "react";

export default function AddItemForm({ onAddingAnItem }) {
	const [itemText, setItemText] = useState("");
	const inputRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!itemText) {
			alert("Please enter an item name");
			inputRef.current.focus();
			return;
		}

		onAddingAnItem(itemText);
		setItemText("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add a new item </h2>
			<input
				ref={inputRef}
				type="text"
				placeholder="Add a new item"
				value={itemText}
				onChange={(event) => {
					setItemText(event.target.value);
				}}
				autoFocus
			/>
			<Button>Add to list</Button>
		</form>
	);
}
