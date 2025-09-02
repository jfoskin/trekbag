import { ITEMS } from "../lib/constants.js";

export default function ItemList() {
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
				{ITEMS.map((item) => {
					return <Item key={item.name} item={item} />;
				})}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li className="item">
			<label>
				<input type="checkbox" /> {item.name}
			</label>
		</li>
	);
}
