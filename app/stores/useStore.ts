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
  updateCardDescription: (cardId: number, newDescription: string) => void;
  updateNodeName: (
    cardId: number,
    groupId: number,
    nodeId: number,
    newNodeName: string
  ) => void;
  updateLeafName: (
    cardId: number,
    groupId: number,
    nodeId: number,
    leafId: number,
    newLeafName: string
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
      return { cards: updatedCards };
    });
  },
  updateCardDescription: (cardId, newDescription) => {
    set((state) => {
      const updatedCards = state.cards.map((card) =>
        card.id === cardId ? { ...card, description: newDescription } : card
      );
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
  updateNodeName: (cardId, groupId, nodeId, newNodeName) => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              groups: card.groups.map((group) =>
                group.id === groupId
                  ? {
                      ...group,
                      nodes: group.nodes.map((node) =>
                        node.id === nodeId
                          ? { ...node, name: newNodeName }
                          : node
                      ),
                    }
                  : group
              ),
            }
          : card
      ),
    }));
  },
  updateLeafName: (cardId, groupId, nodeId, leafId, newLeafName) => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === cardId
          ? {
              ...card,
              groups: card.groups.map((group) =>
                group.id === groupId
                  ? {
                      ...group,
                      nodes: group.nodes.map((node) =>
                        node.id === nodeId
                          ? {
                              ...node,
                              leafs: node.leafs.map((leaf) =>
                                leaf.id === leafId
                                  ? { ...leaf, name: newLeafName }
                                  : leaf
                              ),
                            }
                          : node
                      ),
                    }
                  : group
              ),
            }
          : card
      ),
    }));
  },
}));

export default useStore;
