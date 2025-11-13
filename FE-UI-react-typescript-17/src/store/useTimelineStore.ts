// src/store/useTimelineStore.ts
import { create } from "zustand";
import {
  EVENT_STATUS,
  type EventStatus,
} from "../components/Timeline/timelineConstants";

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  status: EventStatus;
  showDetails: boolean;
}

interface TimelineStore {
  events: TimelineEvent[];
  addEvent: (title: string, description: string, date: string) => void;
  toggleDetails: (id: string) => void;
  markCompleted: (id: string) => void;
  clearCompleted: () => void;
}

export const useTimelineStore = create<TimelineStore>((set, get) => ({
  events: [],

  addEvent: (title, description, date) => {
    const newEvent: TimelineEvent = {
      id: crypto.randomUUID(),
      title,
      description,
      date,
      status: EVENT_STATUS.UPCOMING,
      showDetails: false,
    };
    set((state) => ({ events: [...state.events, newEvent] }));
  },

  toggleDetails: (id) => {
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, showDetails: !event.showDetails } : event
      ),
    }));
  },

  markCompleted: (id) => {
    set((state) => ({
      events: state.events.map((event) =>
        event.id === id ? { ...event, status: EVENT_STATUS.COMPLETED } : event
      ),
    }));
  },

  clearCompleted: () => {
    set((state) => ({
      events: state.events.filter(
        (event) => event.status !== EVENT_STATUS.COMPLETED
      ),
    }));
  },
}));
