import { useItemsContext } from "../lib/hooks";
import Button from "./Button";

export default function ButtonGroup() {
	const {
		handleMarkAllAsComplete,
		handleMarkAllAsIncomplete,
		handleRemovingAllItems,
		handleResetToInitialItems,
	} = useItemsContext();
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
			<Button onClick={handleMarkAllAsComplete} buttonType="secondary">
				Mark all as complete
			</Button>
			<Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
				Mark all as incomplete
			</Button>
			<Button onClick={handleResetToInitialItems} buttonType="secondary">
				Reset to Initial
			</Button>
			<Button onClick={handleRemovingAllItems} buttonType="secondary">
				Remove all items
			</Button>
		</section>
	);
}
