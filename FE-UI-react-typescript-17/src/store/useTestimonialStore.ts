// src/store/useTestimonialStore.ts
import { create } from "zustand";
import {
  TESTIMONIAL_STATUS,
  type TestimonialStatus,
} from "../components/Testimonials/testimonialConstants";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  status: TestimonialStatus;
}

interface TestimonialStore {
  testimonials: Testimonial[];
  addTestimonial: (name: string, role: string, message: string) => void;
  setActive: (id: string) => void;
  removeTestimonial: (id: string) => void;
}

export const useTestimonialStore = create<TestimonialStore>((set) => ({
  testimonials: [
    {
      id: crypto.randomUUID(),
      name: "Alice Smith",
      role: "CEO",
      message: "This product changed my life!",
      status: TESTIMONIAL_STATUS.ACTIVE,
    },
    {
      id: crypto.randomUUID(),
      name: "Bob Johnson",
      role: "Developer",
      message: "Amazing support and quality!",
      status: TESTIMONIAL_STATUS.INACTIVE,
    },
  ],

  addTestimonial: (name, role, message) =>
    set((state) => ({
      testimonials: [
        ...state.testimonials,
        {
          id: crypto.randomUUID(),
          name,
          role,
          message,
          status: TESTIMONIAL_STATUS.INACTIVE,
        },
      ],
    })),

  setActive: (id) =>
    set((state) => ({
      testimonials: state.testimonials.map((t) => ({
        ...t,
        status:
          t.id === id ? TESTIMONIAL_STATUS.ACTIVE : TESTIMONIAL_STATUS.INACTIVE,
      })),
    })),

  removeTestimonial: (id) =>
    set((state) => ({
      testimonials: state.testimonials.filter((t) => t.id !== id),
    })),
}));
