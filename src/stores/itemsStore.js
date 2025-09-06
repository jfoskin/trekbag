import { create } from "zustand";
import { ITEMS } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
	persist(
		(set) => ({
			items: ITEMS,
			addingAnItem: (newItemText) => {
				const newItem = {
					id: new Date().getTime(),
					name: newItemText,
					packed: false,
				};
				set((state) => {
					const newItems = [...state.items, newItem];
					return { items: newItems };
				});
			},
			deletingAnItem: (id) => {
				set((state) => {
					const newItems = state.items.filter((item) => item.id !== id);
					return { items: newItems };
				});
			},
			togglingAnItem: (id) => {
				set((state) => {
					const newItems = state.items.map((item) => {
						if (item.id === id) {
							return { ...item, packed: !item.packed };
						}
						return item;
					});
					return { items: newItems };
				});
			},
			removeAllItems: () => set(() => ({ items: [] })),
			resetToInitialItems: () => set(() => ({ items: ITEMS })),
			markAllAsComplete: () => {
				set((state) => {
					const newItems = state.items.map((item) => {
						return { ...item, packed: true };
					});
					return { items: newItems };
				});
			},
			markAllAsIncomplete: () => {
				set((state) => {
					const newItems = state.items.map((item) => {
						return { ...item, packed: false };
					});
					return { items: newItems };
				});
			},
		}),
		{
			name: "items",
		}
	)
);
