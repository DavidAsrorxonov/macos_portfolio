import { WINDOW_CONFIG } from "#constants/windowConfig";
import { create } from "zustand";
import {immer} from "zustand/middleware/immer"

const useWindowStore = create(immer((set) => {
    windows: WINDOW_CONFIG
}))