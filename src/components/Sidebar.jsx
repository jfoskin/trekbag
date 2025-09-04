import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({
	handleAddingAnItem,
	handleRemovingAllItems,
	handleResetToInitialItems,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	return (
		<div className="sidebar">
			<AddItemForm handleAddingAnItem={handleAddingAnItem} />
			<ButtonGroup
				handleRemovingAllItems={handleRemovingAllItems}
				handleResetToInitialItems={handleResetToInitialItems}
				handleMarkAllAsComplete={handleMarkAllAsComplete}
				handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
			/>
		</div>
	);
}
