import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const page = import.meta.env.VITE_PAGE || "library";

const pages: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  library:  () => import("./pages/ComponentLibrary"),
  mobile:   () => import("./pages/MobilePage"),
  category: () => import("./pages/CategorySplitPage"),
  himarc:   () => import("./pages/HiMarcPage"),
  black:    () => import("./pages/MobileBlackPage"),
  scoring:  () => import("./pages/ScoringPage"),
  himichelle: () => import("./pages/HiMichellePage"),
};

const loader = pages[page] ?? pages.library;

loader().then(({ default: Page }) => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <Page />
    </StrictMode>
  );
});
