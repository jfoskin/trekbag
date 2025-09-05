import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

import { useItemsContext } from "../lib/hooks";

export default function Sidebar() {
	const { handleAddingAnItem } = useItemsContext();

	return (
		<div className="sidebar">
			<AddItemForm onAddingAnItem={handleAddingAnItem} />
			<ButtonGroup />
		</div>
	);
}
