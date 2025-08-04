import { create } from "zustand";
import type { AccordionState } from "../../../interface";

const useAccordionStore = create<AccordionState>((set) => ({
    openItemId:null,
    toggleItem:(id:string) => set((state) => ({
        openItemId:state.openItemId === id ? null : id;
    }))
}))

export default useAccordionStore;