import { Link } from "react-router-dom";
import Logo from "../../components/UI/icons/Logo";
import LoginTabs from "../../components/LoginTabs";

const Login = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center justify-center">
            <Logo className="w-16 h-16" />
          </Link>
        </div>
        <LoginTabs />
      </div>
    </main>
  );
};

export default Login;
