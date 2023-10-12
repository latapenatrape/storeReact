import { Ilogin } from "../../modules/modules";
import { userSlice } from "../Slices/UserSlice";
import { AppDispatch } from "../store";

export const setuplogin = ({ data }: { data: Ilogin }) => (
  dispatch: AppDispatch
) => {
  console.log();
  dispatch(userSlice.actions.loginSuccess(data));
  console.log(data);
};
