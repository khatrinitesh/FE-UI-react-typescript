import { create } from "zustand";
import type { StatItem } from "../interfaces/stats";
import { STATS_DATA } from "../constants/statsData";


interface StatsState {
  stats: StatItem[];
}

export const useStatsStore = create<StatsState>(() => ({
  stats: STATS_DATA,
}));