import "@styles/globals.css";

import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <div>
        <main>
            {children}
        </main>
      </div>
    </body>
  </html>
);

export default RootLayout;
