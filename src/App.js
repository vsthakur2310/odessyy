import React from "react";
import "./App.css";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="App">
      {/* left_Sidebar */}
      <LeftSidebar />

      {/* Feed */}
      <Feed />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default App;
