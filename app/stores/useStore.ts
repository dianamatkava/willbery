import { create } from "zustand";
import { CardInterface } from "~/interfaces/CardInterfaces";
interface CardStore {
  cards: CardInterface[];
  updateCardName: (cardId: number, newName: string) => void;
  updateGroupName: (
    cardId: number,
    groupId: number,
    newGroupName: string
  ) => void;
}

const useStore = create<CardStore>((set) => ({
  cards: [],
  setCards: (cards) => {
    set({ cards });
  },
  updateCardName: (cardId, newName) => {
    set((state) => {
      const updatedCards = state.cards.map((card) =>
        card.id === cardId ? { ...card, name: newName } : card
      );

      console.log("Cards after update:", updatedCards); // Check updated state
      return { cards: updatedCards };
    });
  },
  updateGroupName: (cardId, groupId, newGroupName) => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              groups: card.groups.map((group) =>
                group.id === groupId ? { ...group, name: newGroupName } : group
              ),
            }
          : card
      ),
    }));
  },
}));

export default useStore;
