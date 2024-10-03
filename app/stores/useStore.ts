import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

import { CardInterface, TrackingInterface } from "~/interfaces/CardInterfaces";
import { produce } from "immer";
import {
  CardGroupInterface,
  CardLeafInterface,
  CardNodeInterface,
  ScoupeInterface,
  TagInterface,
  UserInterface,
} from "~/interfaces/CardInterfaces";

interface CardStore {
  cards: CardInterface[];
  user: UserInterface | null;
  scoupes: ScoupeInterface[] | null;
  cardTags: TagInterface[] | null;

  setCards: (cards: CardInterface[]) => void;
  setUser: (user: UserInterface) => void;
  setScoupes: (scoupes: ScoupeInterface[]) => void;
  setCardTags: (cardTags: TagInterface[]) => void;

  updateCardName: (cardId: string, newName: string) => void;
  updateCardScoupe: (cardId: string, newScoupe: ScoupeInterface) => void;
  updateGroupName: (
    cardId: string,
    groupId: string,
    newGroupName: string
  ) => void;
  updateCardDescription: (cardId: string, newDescription: string) => void;
  updateNodeName: (
    cardId: string,
    groupId: string,
    nodeId: string,
    newNodeName: string
  ) => void;
  updateNodeTag: (
    cardId: string,
    groupId: string,
    nodeId: string,
    newNodeTag: string
  ) => void;
  updateLeafName: (
    cardId: string,
    groupId: string,
    nodeId: string,
    leafId: string,
    newLeafName: string
  ) => void;
  updateLeafTag: (
    cardId: string,
    groupId: string,
    nodeId: string,
    leafId: string,
    newLeafTag: TagInterface
  ) => void;
  createCard: (newCard: CardInterface) => void;
  createGroup: (cardId: string, newGroup: CardGroupInterface) => void;
  createNode: (
    cardId: string,
    groupId: string,
    newNode: CardNodeInterface
  ) => void;
  createNodeTracking: (
    cardId: string,
    groupId: string,
    nodeId: string,
    newTracking: object
  ) => void;
  createLeaf: (
    cardId: string,
    groupId: string,
    nodeId: string,
    newLeaf: CardLeafInterface
  ) => void;
}

const useStore = create<CardStore>()(
  devtools(
    // This enables Redux DevTools for debugging.
    persist(
      // This middleware saves the store in localStorage or sessionStorage to persist the state between reloads.
      (set) => ({
        cards: [],
        setCards: (cards) => {
          set({ cards });
        },
        cardTags: [],
        setCardTags: (cardTags: TagInterface[]) => {
          set({ cardTags });
        },
        scoupes: [],
        setScoupes: (scoupes: ScoupeInterface[]) => {
          set({ scoupes });
        },

        user: null,
        setUser: (user) => {
          set({ user });
        },

        // ################ Update Functions ################
        updateCardName: (cardId, newName) => {
          set((state) => {
            const updatedCards = state.cards.map((card) =>
              card._id.toString() === cardId ? { ...card, name: newName } : card
            );
            return { cards: updatedCards };
          });
        },
        updateCardScoupe: (cardId, newScoupe) => {
          set((state) => {
            const updatedCards = state.cards.map((card) =>
              card._id.toString() === cardId
                ? { ...card, scoupe: newScoupe }
                : card
            );
            return { cards: updatedCards };
          });
        },
        updateCardDescription: (cardId, newDescription) => {
          set((state) => {
            const updatedCards = state.cards.map((card) =>
              card._id.toString() === cardId
                ? { ...card, description: newDescription }
                : card
            );
            return { cards: updatedCards };
          });
        },
        updateGroupName: (cardId, groupId, newGroupName) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              group.name = newGroupName;
            })
          );
        },
        updateNodeName: (cardId, groupId, nodeId, newNodeName) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              node.name = newNodeName;
            })
          );
        },
        updateNodeTag: (cardId, groupId, nodeId, newNodeTag) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              node.tag = newNodeTag;
            })
          );
        },
        updateLeafName: (cardId, groupId, nodeId, leafId, newLeafName) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              const leaf = node.leafs.find((l) => l._id.toString() === leafId);
              leaf.name = newLeafName;
            })
          );
        },
        updateLeafTag: (cardId, groupId, nodeId, leafId, newLeafTag) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              const leaf = node.leafs.find((l) => l._id.toString() === leafId);
              leaf.tag = newLeafTag;
            })
          );
        },

        // ################ Create Functions ################
        createCard: (newCard) => {
          set((state) => ({ cards: [newCard, ...state.cards] }));
        },
        createGroup: (cardId, newGroup) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              if (card.groups) {
                card.groups.push(newGroup);
              } else {
                card.groups = [newGroup];
              }
            })
          );
        },
        createNode: (cardId, groupId, newNode) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              if (group.nodes) {
                group.nodes.push(newNode);
              } else {
                group.nodes = [newNode];
              }
            })
          );
        },
        createNodeTracking: (
          cardId: string,
          groupId: string,
          nodeId: string,
          newTracking: TrackingInterface
        ) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              node.tracking = newTracking;
            })
          );
        },
        createLeaf: (cardId, groupId, nodeId, newLeaf) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              if (node.leafs) {
                node.leafs.push(newLeaf);
              } else {
                node.leafs = [newLeaf];
              }
            })
          );
        },
        createLeafTracking: (cardId, groupId, nodeId, leafId, newTracking) => {
          set((state) =>
            produce(state, (draft) => {
              const card = draft.cards.find((c) => c._id.toString() === cardId);
              const group = card.groups.find(
                (g) => g._id.toString() === groupId
              );
              const node = group.nodes.find((n) => n._id.toString() === nodeId);
              const leaf = node.leafs.find((l) => l._id.toString() === leafId);
              leaf.tracking = newTracking;
            })
          );
        },
      }),
      { name: "zustand-store" }
    )
  )
);

export default useStore;
