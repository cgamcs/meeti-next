import { create } from "zustand"

type Store = {
  open: boolean
}

export const useCommunityStore = create<Store>(() => ({
  open: false
}))