import { create } from "zustand";
import { COUPONS } from "../constants/constants";
import type { CouponState } from "../interface";

export const useCouponStore = create<CouponState>((set, get) => ({
  code: "",
  applied: false,
  discount: 0,
  setCode: (code) => set({ code }),

  applyCoupon: () => {
    const { code } = get();

    const coupon = COUPONS.find((c) => c.code === code.toUpperCase());

    if (coupon) {
      set({
        applied: true,
        discount: coupon.discount,
      });
    } else {
      set({
        applied: false,
        discount: 0,
      });
    }
  },
}));
