import React from "react";
import { createRoot } from "react-dom/client";
import CalcButton from "./CalcButton"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<CalcButton num=1 />);
