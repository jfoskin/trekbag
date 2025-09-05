import { createContext, useState, useEffect } from "react";
import { ITEMS } from "../lib/constants";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
	// Load items from localStorage or use default ITEMS
	const [items, setItems] = useState(
		() => JSON.parse(localStorage.getItem("items")) || ITEMS
	);

	// const packedItems = items.filter((item) => item.packed).length;

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

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	return (
		<ItemsContext.Provider
			value={{
				items,
				handleAddingAnItem,
				handleDeletingAnItem,
				handleMarkAllAsComplete,
				handleMarkAllAsIncomplete,
				handleRemovingAllItems,
				handleResetToInitialItems,
				handleTogglingAnItem,
			}}
		>
			{children}
		</ItemsContext.Provider>
	);
}
