import React from "react";
import "./App.css";
import PoetryFeed from "./PoetryFeed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

function App() {
  return (
    <div className="App">
      {/* left_Sidebar */}
      <LeftSidebar />

      {/* Feed */}
      <PoetryFeed />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default App;
