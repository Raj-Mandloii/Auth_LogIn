import Dashboard from "./Dashboard";

export default function LoginForm(props) {
  const { isAuth } = props;
  console.log(isAuth);
  return (
    <>
      {!isAuth ? (
        <form>
          <input placeholder="Email" Email />
          <input placeholder="Password" Password />
          <input placeholder="" Password type="submit" />
        </form>
      ) : (
        <Dashboard />
      )}
    </>
  );
}
