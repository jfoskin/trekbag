import Button from "./Button";

import { secondaryBtns } from "../lib/constants";

export default function ButtonGroup({
	handleRemovingAllItems,
	handleResetToInitialItems,
	handleMarkAllAsComplete,
	handleMarkAllAsIncomplete,
}) {
	return (
		<section className="button-group">
			{/* {secondaryBtns.map((secondaryText) => {
				// console.log([]);
				return (
					<Button key={secondaryText} type="secondary">
						{secondaryText}
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
