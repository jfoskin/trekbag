import { ITEMS } from "../lib/constants";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import { useState } from "react";

function App() {
	const [items, setItems] = useState(ITEMS);

	const packedItems = items.filter((item) => item.packed).length;

	const handleAddingAnItem = (newItemText) => {
		const newItem = {
			id: new Date().getTime(),
			name: newItemText,
			packed: false,
		};
		const newItems = [...items, newItem];
		setItems(newItems);
	};

	const handleDeletingAnItem = (id) => {
		const newItems = items.filter((item) => item.id !== id);
		setItems(newItems);
	};

	const handleTogglingAnItem = (id) => {
		const newItems = items.map((item) => {
			if (item.id === id) {
				return { ...item, packed: !item.packed };
			}
			return item;
		});
		setItems(newItems);
	};

	const handleRemovingAllItems = () => {
		setItems([]);
	};

	const handleResetToInitialItems = () => {
		setItems(ITEMS);
	};

	const handleMarkAllAsComplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: true };
		});
		setItems(newItems);
	};

	const handleMarkAllAsIncomplete = () => {
		const newItems = items.map((item) => {
			return { ...item, packed: false };
		});
		setItems(newItems);
	};

	return (
		<>
			<BackgroundHeading />
			<main>
				<Header totalNumberOfItems={items.length} packedItems={packedItems} />
				<ItemList
					items={items}
					handleDeletingAnItem={handleDeletingAnItem}
					handleTogglingAnItem={handleTogglingAnItem}
				/>
				<Sidebar
					setItems={setItems}
					handleAddingAnItem={handleAddingAnItem}
					handleRemovingAllItems={handleRemovingAllItems}
					handleResetToInitialItems={handleResetToInitialItems}
					handleMarkAllAsComplete={handleMarkAllAsComplete}
					handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
				/>
			</main>
			<Footer />
		</>
	);
}

export default App;
