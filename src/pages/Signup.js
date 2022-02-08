import Card from "../ui/Card";
import classes from "./login.module.css";

function Login() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label hmtlFor="username">Username</label>
          <input type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label hmtlFor="pass">Password</label>
          <input type="password" required id="password" />
        </div>
        <div className={classes.action}>
          <button>Log in</button>
        </div>
      </form>
    </Card>
  );
}
export default Login;
