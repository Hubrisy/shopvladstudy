import axios from "axios"

import { apiUrl } from "../config"
import type { CouponItem } from "../types"

export const api = {
  fetchCoupon: async (code: string) => {
    const { data } = await axios.get<CouponItem>(`${apiUrl}coupon/${code}`)

    return data
  },
}
