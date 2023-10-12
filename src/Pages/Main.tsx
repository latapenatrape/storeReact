import classes from "../Style/Pages/Main.module.scss";
import { useNavigate } from "react-router-dom";
import UIButton from "../Componets/UIButton";
const Main = () => {
  const navigate = useNavigate();
  const click = () => {};
  return (
    <div className={classes[""]}>
      Home
      <UIButton onClick={() => navigate("/reg")} type="string">
        Authorization
      </UIButton>
    </div>
  );
};
export default Main;
