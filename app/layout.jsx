import { UserProvider } from "@auth0/nextjs-auth0/client";
import "../scss/index.css";
export const metadata = {
  title: "Banter-GPT",
  description: "Banter-GPT is a chat assistant",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
