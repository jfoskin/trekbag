import Button from "./Button";

import { secondaryBtns } from "../lib/constants";

export default function ButtonGroup() {
	return (
		<section className="button-group">
			{secondaryBtns.map((secondaryText) => {
				// console.log([]);
				return (
					<Button key={secondaryText} type="secondary">
						{secondaryText}
					</Button>
				);
			})}
			{/* <Button type="secondary">Mark all as complete</Button>
			<Button type="secondary">Mark all as incomplete</Button>
			<Button type="secondary">Reset to Initial</Button>
			<Button type="secondary">Remove all items</Button> */}
		</section>
	);
}
