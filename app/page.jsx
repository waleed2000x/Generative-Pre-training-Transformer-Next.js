import Image from "next/image";
import RouteProtector from "./components/RouteProtector";
import { StandardButton } from "./components/buttons/Buttons";
import LoginIcon from "@mui/icons-material/Login";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
export default function Home() {
  return (
    <>
      <RouteProtector />
      <div className="PARENT">
        <div className="home-center">
          <div className="big-logo">
            <Image src="/images/biglogo.png" width={200} height={200} />
          </div>
          <div>Get Started with Authorization to comtinue</div>
          <div className="buttons">
            <a href="/api/auth/login" style={{ textDecoration: "none" }}>
              <StandardButton Title="Login" Icon={LoginIcon} />
            </a>
            <a href="/api/auth/signup" style={{ textDecoration: "none" }}>
              <StandardButton Title="Signup" Icon={ExitToAppIcon} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
