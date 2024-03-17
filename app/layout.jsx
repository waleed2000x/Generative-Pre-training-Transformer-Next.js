import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../scss/index.css";
import Header from "./components/header/Header";
import CursorTrail from "./components/cursor/CursorTrail";
import Background from "./components/background/Background";

export const metadata = {
  title: "Banter-GPT",
  description: "Banter-GPT is a chat assistant",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <CursorTrail />
          <Background />
          <Header />
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
