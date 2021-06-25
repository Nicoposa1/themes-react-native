import React, { useContext } from "react";

import Card from "./card/Card";
import { ThemeProvider } from "./theme-context/theme-context.js";

const App = () => {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  );
};

export default App;
