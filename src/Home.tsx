import { useContext } from "react";
import { UserContext } from "./contexts/contexts";

const Home = () => {
  const { userName } = useContext(UserContext);

  return (
    <div>
      <ul>
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <a href="/huga">huga</a>
        </li>
        <li>
          <div style={{ display: userName ? "none" : "" }}>Signin</div>
        </li>
      </ul>
    </div>
  );
};
export default Home;
