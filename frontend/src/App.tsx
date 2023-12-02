import { authSelector } from "redux/auth/auth.reducer";
import { useSelector } from "redux/store";
import routes from "router/router";

function App() {
  const { isUserLoggedIn: isLoggedIn } = useSelector(authSelector);

  return <div className="App">{routes(isLoggedIn)}</div>;
}

export default App;
