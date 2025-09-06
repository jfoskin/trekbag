import { useMemo, useState } from "react";
import Select from "react-select";

import EmptyItemView from "./EmptyItemView";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
	{ value: "default", label: "Sort by Default" },
	{ value: "unpacked", label: "Sort by unpacked" },
	{ value: "packed", label: "Sort by packed" },
];

export default function ItemList() {
	const [sortBy, setSortBy] = useState("default");

	const items = useItemsStore((state) => state.items);
	const deletingAnItem = useItemsStore((state) => state.deletingAnItem);
	const togglingAnItem = useItemsStore((state) => state.togglingAnItem);

	const sortedItems = useMemo(
		() =>
			[...items].sort((a, b) => {
				if (sortBy === "packed") {
					return b.packed - a.packed;
				}
				if (sortBy === "unpacked") {
					return a.packed - b.packed;
				}
				return;
			}),
		[items, sortBy]
	);

	return (
		<ul className="item-list">
			{items.length === 0 && <EmptyItemView />}
			{items.length > 0 ? (
				<section className="sorting">
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
						onDeletingAnItem={deletingAnItem}
						onTogglingAnItem={togglingAnItem}
					/>
				);
			})}
		</ul>
	);
}

function Item({ item, onDeletingAnItem, onTogglingAnItem }) {
	return (
		<li className="item">
			<label>
				<input
					onChange={() => onTogglingAnItem(item.id)}
					type="checkbox"
					checked={item.packed}
				/>
				{item.name}
			</label>
			<button
				className="remove-btn"
				aria-label={`Remove ${item.name}`}
				onClick={() => onDeletingAnItem(item.id)}
			>
				❌
			</button>
		</li>
	);
}
