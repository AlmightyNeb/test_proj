import React from "react";
import { createRoot } from "react-dom/client";
import CalcLayout from "./CalcLayout"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<CalcLayout />);
