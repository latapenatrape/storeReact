import { useState } from "react";
import classes from "../Style/Components/reg.module.scss";
import UIButton from "./UIButton";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../Hooks/Redux";
import { setuplogin } from "../Store/ActionCreators/UserActionCreators";
const Reg = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [reg, setReg] = useState(true);
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const setupData = () => {
    const data = { login, password };
    dispatch(setuplogin({ data }));
  };

  return (
    <div className={classes["Card"]}>
      {reg ? <h1>Registration</h1> : <h1>Login</h1>}
      <p>Phone number:</p>
      <input placeholder="+7 (___)" type="number" />
      <p>Password:</p>
      <input placeholder="**********" type="text" />
      <UIButton type="string" onClick={() => setupData()}>
        Click
      </UIButton>
      {reg ? (
        <p>
          Have an account?{" "}
          <UIButton type="number" onClick={() => setReg(!reg)}>
            Log in
          </UIButton>
        </p>
      ) : (
        <p>
          Don`t have an account?{" "}
          <UIButton type="number" onClick={() => setReg(!reg)}>
            Sign in
          </UIButton>
        </p>
      )}
      <UIButton type="active" onClick={() => navigate("/")}>
        Back
      </UIButton>
    </div>
  );
};
export default Reg;
