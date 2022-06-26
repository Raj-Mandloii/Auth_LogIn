import LoginForm from "./Components/LoginForm";
import "./styles.css";

export default function App() {
  // let isAuth = true;
  return (
    <div className="App">
      <LoginForm isAuth={false} />
    </div>
  );
}
