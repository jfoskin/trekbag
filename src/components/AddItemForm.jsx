import Button from "./Button";

export default function AddItemForm() {
	return (
		<form>
			<h2>Add a new item </h2>
			<input type="text" placeholder="Add a new item" />
			<Button>Add to list</Button>
		</form>
	);
}
