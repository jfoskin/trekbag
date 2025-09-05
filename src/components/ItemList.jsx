import { useState } from "react";
import Select from "react-select";

import EmptyItemView from "./EmptyItemView";

const sortingOptions = [
	{ value: "default", label: "Sort by Default" },
	{ value: "unpacked", label: "Sort by unpacked" },
	{ value: "packed", label: "Sort by packed" },
];

export default function ItemList({
	items,
	handleDeletingAnItem,
	handleTogglingAnItem,
}) {
	const [sortBy, setSortBy] = useState("default");

	const sortedItems = [...items].sort((a, b) => {
		if (sortBy === "packed") {
			return b.packed - a.packed;
		}
		if (sortBy === "unpacked") {
			return a.packed - b.packed;
		}
		return;
	});

	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyItemView />}
			{items.length > 0 ? (
				<section>
					<Select
						defaultValue={sortingOptions[0]}
						options={sortingOptions}
						onChange={(option) => setSortBy(option.value)}
					/>
				</section>
			) : null}

			{sortedItems.map((item) => {
				return (
					<Item
						key={item.id}
						item={item}
						handleDeletingAnItem={handleDeletingAnItem}
						handleTogglingAnItem={handleTogglingAnItem}
					/>
				);
			})}
		</ul>
	);
}

function Item({ item, handleDeletingAnItem, handleTogglingAnItem }) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => handleTogglingAnItem(item.id)}
					type="checkbox"
					checked={item.packed}
				/>
				{item.name}
			</label>
			<button
				className="remove-btn"
				aria-label={`Remove ${item.name}`}
				onClick={() => handleDeletingAnItem(item.id)}
			>
				❌
			</button>
		</li>
	);
}
