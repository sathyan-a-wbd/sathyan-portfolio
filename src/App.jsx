import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Loader from "./components/ui/Loader";

function App() {
  const [contactFocus, setContactFocus] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ?
        <Loader onComplete={() => setLoading(false)} />
      : <Home setContactFocus={setContactFocus} contactFocus={contactFocus} />}
    </>
  );
}

export default App;
