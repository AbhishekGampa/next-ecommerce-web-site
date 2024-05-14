import React from "react";
// import "../(parent)/global.css";
function layout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black" }}>
        <div>{children}</div>
      </body>
    </html>
  );
}

export default layout;
