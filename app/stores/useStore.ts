import { create } from "zustand";
import { CardInterface, TrackingInterface } from "~/interfaces/CardInterfaces";
import { produce } from "immer";
import {
  CardGroupInterface,
  CardLeafInterface,
  CardNodeInterface,
  UserInterface,
} from "~/interfaces/CardInterfaces";

interface CardStore {
  cards: CardInterface[];
  tags: string[];
  domains: string[];
  user: UserInterface | null;

  setCards: (cards: CardInterface[]) => void;
  setTags: (tags: string[]) => void;
  setDomains: (domains: string[]) => void;
  setUser: (user: UserInterface) => void;

  updateTags: (newTag: string) => void;
  updateDomains: (newDomain: string) => void;
  updateCardName: (cardId: string, newName: string) => void;
  updateCardTag: (cardId: string, newTag: string) => void;
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
    newLeafTag: string
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

const useStore = create<CardStore>((set) => ({
  cards: [],
  setCards: (cards) => {
    set({ cards });
  },
  tags: [],
  setTags: (tags) => {
    set({ tags });
  },
  domains: [],
  setDomains: (domains) => {
    set({ domains });
  },

  user: null,
  setUser: (user) => {
    set({ user });
  },

  // ################ Update Functions ################
  updateDomains: (newDomain) => {
    set((state) => {
      if (state.domains.includes(newDomain)) {
        return { domains: state.domains };
      }
      const updatedDomains = [...state.domains, newDomain];
      // remove duplicates
      const domainsSet = new Set(updatedDomains);
      return { domains: Array.from(domainsSet) };
    });
  },
  updateTags: (newTag) => {
    set((state) => {
      if (state.tags.includes(newTag)) {
        return { tags: state.tags };
      }
      const updatedTags = [...state.tags, newTag];
      // remove duplicates
      const tagsSet = new Set(updatedTags);
      return { tags: Array.from(tagsSet) };
    });
  },
  updateCardName: (cardId, newName) => {
    set((state) => {
      const updatedCards = state.cards.map((card) =>
        card.id === cardId ? { ...card, name: newName } : card
      );
      return { cards: updatedCards };
    });
  },
  updateCardTag: (cardId, newTag) => {
    set((state) => {
      const updatedCards = state.cards.map((card) =>
        card.id === cardId ? { ...card, tag: newTag } : card
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
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        group.name = newGroupName;
      })
    );
  },
  updateNodeName: (cardId, groupId, nodeId, newNodeName) => {
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        node.name = newNodeName;
      })
    );
  },
  updateNodeTag: (cardId, groupId, nodeId, newNodeTag) => {
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        node.tag = newNodeTag;
      })
    );
  },
  updateLeafName: (cardId, groupId, nodeId, leafId, newLeafName) => {
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        const leaf = node.leafs.find((l) => l.id === leafId);
        leaf.name = newLeafName;
      })
    );
  },
  updateLeafTag: (cardId, groupId, nodeId, leafId, newLeafTag) => {
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        const leaf = node.leafs.find((l) => l.id === leafId);
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
        const card = draft.cards.find((c) => c.id === cardId);
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
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
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
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        node.tracking = newTracking;
      })
    );
  },
  createLeaf: (cardId, groupId, nodeId, newLeaf) => {
    set((state) =>
      produce(state, (draft) => {
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
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
        const card = draft.cards.find((c) => c.id === cardId);
        const group = card.groups.find((g) => g.id === groupId);
        const node = group.nodes.find((n) => n.id === nodeId);
        const leaf = node.leafs.find((l) => l.id === leafId);
        leaf.tracking = newTracking;
      })
    );
  },
}));

export default useStore;
