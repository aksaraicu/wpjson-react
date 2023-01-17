import React from "react";
import ArchiveAset from "./components/ArchiveAset";
import { 
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
          <Route path="/" element={
            <ArchiveAset/>
            }/>
    </Routes>
    </>
  );
}

export default App;
