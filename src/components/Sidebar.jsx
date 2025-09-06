import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
	const addingAnItem = useItemsStore((state) => state.addingAnItem);

	return (
		<div className="sidebar">
			<AddItemForm onAddingAnItem={addingAnItem} />
			<ButtonGroup />
		</div>
	);
}
