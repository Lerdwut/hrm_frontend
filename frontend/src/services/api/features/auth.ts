import { instance } from "../intance";
import { handleApiError } from "../helper";
import type { LoginRes, LoginReq } from "@/types/dto/auth.dto.ts";

export default {
  async login(body: LoginReq): Promise<LoginRes> {
    try {
      const response = await instance.post<LoginRes>("/auth/login", body);
      return response.data;
    } catch (err) {
      handleApiError(err, "login");
    }
  },
}
