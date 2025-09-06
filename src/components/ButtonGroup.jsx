import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
	const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
	const markAllAsIncomplete = useItemsStore(
		(state) => state.markAllAsIncomplete
	);
	const resetToInitialItems = useItemsStore(
		(state) => state.resetToInitialItems
	);
	const removeAllItems = useItemsStore((state) => state.removeAllItems);

	// const secondaryBtnActions = [
	// 	{ text: "Mark all as complete", onClick: handleMarkAllAsComplete },
	// 	{ text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
	// 	{ text: "Reset to Initial", onClick: handleResetToInitialItems },
	// 	{ text: "Remove all items", onClick: handleRemovingAllItems },
	// ];

	return (
		<section className="button-group">
			{/* {secondaryBtnActions.map((secondaryBtnAction) => {
				// console.log([]);
				return (
					<Button
						key={secondaryBtnAction.text}
						type="secondary"
						onClick={secondaryBtnAction.onClick}
					>
						{secondaryBtnAction.text}
					</Button>
				);
			})} */}
			<Button onClick={markAllAsComplete} buttonType="secondary">
				Mark all as complete
			</Button>
			<Button onClick={markAllAsIncomplete} buttonType="secondary">
				Mark all as incomplete
			</Button>
			<Button onClick={resetToInitialItems} buttonType="secondary">
				Reset to Initial
			</Button>
			<Button onClick={removeAllItems} buttonType="secondary">
				Remove all items
			</Button>
		</section>
	);
}
