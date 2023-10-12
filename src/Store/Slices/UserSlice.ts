import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserSlice {
  login: string;
  password: string;
}
const initialState: UserSlice = {
  login: "",
  password: ""
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<any>) {
      state.login = action.payload.login;
      state.password = action.payload.password;
    }
  }
});
export default userSlice.reducer;
