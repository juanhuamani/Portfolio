import { createRoot } from 'react-dom/client'
import { App } from "./app";
import './index.css'
import './i18n'

const root = document.getElementById("root");
if (!root) throw new Error("No root element found");

createRoot(root).render(
    <App />
);
