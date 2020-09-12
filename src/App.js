import React from "react";
import "./App.css";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
// import Right_Sidebar from "./Right_Sidebar";

function App() {
  return (
    <div className="App">
      {/* left_Sidebar */}
      <LeftSidebar />

      {/* Feed */}
      <Feed />

      {/* Right Sidebar */}
      {/* <Right_Sidebar /> */}
    </div>
  );
}

export default App;
