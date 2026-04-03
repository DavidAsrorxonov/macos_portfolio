import { Dock, Home, Navbar, Welcome } from "#components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
} from "#windows";
import gsap from "gsap";

import { Analytics } from "@vercel/analytics/react";

import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function App() {
  return (
    <>
      <div className="mobile-incompatible-overlay">
        <div className="incompatibility-message">
          <h1>Not Compatible</h1>
          <p>
            This portfolio is designed for{" "}
            <span className="highlight">desktop (laptop) screens</span> only.
          </p>
          <p className="text-gray-300 text-sm">
            Please open this website on a laptop or larger screen for the best
            experience.
          </p>
          <div className="device-icons">
            <span>💻</span>
            <span>🖥️</span>
          </div>
        </div>
      </div>

      <main>
        <Navbar />
        <Welcome />
        <Dock />

        <Terminal />
        <Safari />
        <Resume />
        <Finder />
        <Text />
        <Image />
        <Contact />

        <Home />
      </main>

      <Analytics />
    </>
  );
}

export default App;
