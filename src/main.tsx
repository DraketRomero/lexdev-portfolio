import { createRoot } from "react-dom/client";
import { MainProvider } from "./MainProvider";
import './i18n/config';
import './index.css'

createRoot(document.getElementById('root')!).render(
    <MainProvider />
)