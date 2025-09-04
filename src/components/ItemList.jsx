export default function ItemList({ items }) {
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
				{items.map((item) => {
					return <Item key={item.id} item={item} />;
				})}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li className="item">
			<label>
				<input type="checkbox" checked={item.packed} /> {item.name}
			</label>
			<button className="remove-btn" aria-label={`Remove ${item.name}`}>
				❌
			</button>
		</li>
	);
}
