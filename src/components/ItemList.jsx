import EmptyItemView from "./EmptyItemView";

export default function ItemList({
	items,
	handleDeletingAnItem,
	handleTogglingAnItem,
}) {
	return (
		<div>
			<section>
				<select name="cars" id="cars">
					<option value="volvo">Sort by Default</option>
					<option value="saab">Sort by unpacked</option>
					<option value="mercedes">Sort by packed</option>
				</select>
			</section>
			<ul>
				{items.length === 0 && <EmptyItemView />}

				{items.map((item) => {
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
		</div>
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
