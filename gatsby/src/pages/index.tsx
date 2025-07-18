

import React from "react";

const IndexPage: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    padding: "3rem 5%",
    maxWidth: "960px",
    margin: "0 auto",
    color: "#333",
    lineHeight: 1.7,
  };

  const h1Style: React.CSSProperties = {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  };

  const h2Style: React.CSSProperties = {
    marginTop: "2.5rem",
    fontSize: "1.5rem",
    borderBottom: "2px solid #ddd",
    paddingBottom: "0.3rem",
    marginBottom: "1rem",
  };

  const preStyle: React.CSSProperties = {
    backgroundColor: "#2d2d2d",
    color: "#f8f8f2",
    padding: "1rem",
    borderRadius: "6px",
    overflowX: "auto",
    fontSize: "0.9rem",
  };

  const codeStyle: React.CSSProperties = {
    backgroundColor: "#eee",
    padding: "0.2em 0.4em",
    borderRadius: "4px",
    fontFamily: "'Courier New', monospace",
    fontSize: "0.95em",
  };

  const footerStyle: React.CSSProperties = {
    marginTop: "3rem",
    fontSize: "0.85rem",
    color: "#888",
    textAlign: "center",
  };

  return (
    <main style={containerStyle}>
      <h1 style={h1Style}>🚀 gatsby-desktop-kit</h1>
      <p>
        A minimal, extensible starter kit for building cross-platform desktop
        apps using <strong>Gatsby + Electron + TypeScript</strong>.
      </p>

      <h2 style={h2Style}>✨ Features</h2>
      <ul>
        <li>⚡ Gatsby frontend + Electron backend</li>
        <li>🛠️ Minimal setup with maximum flexibility</li>
        <li>🖥️ Desktop-ready architecture</li>
      </ul>

      <h2 style={h2Style}>⚠️ Notice</h2>
      <ul>
        <li>
          Currently tested only on <strong>Windows</strong>.
        </li>
        <li>
          <strong>macOS / Linux</strong> support is unverified — PRs welcome!
        </li>
        <li>
          If the app is still running, <strong>build commands may fail</strong>{" "}
          due to locked files. Kill Electron from your Task Manager if needed.
        </li>
      </ul>

      <p>
        The <code style={codeStyle}>/gatsby</code> directory is essentially a
        slightly customized Gatsby frontend, which can be deployed to the web
        using services like Netlify.
        <br />
        By unifying data storage via{" "}
        <code style={codeStyle}>localStorage</code>, both the web and desktop
        (Electron) versions can share the same behavior from a single codebase.
      </p>

      <h2 style={h2Style}>🛠 Usage</h2>
      <pre style={preStyle}>
        <code>
          git clone https://github.com/tatsuoNakano/gatsby-desktop-kit-template
          <br />
          cd gatsby-desktop-kit-template
          <br />
          npm install
          <br />
          cd gatsby
          <br />
          npm install
          <br />
          cd ../
          <br />
          npm run dev:web
        </code>
      </pre>

      <h2 style={h2Style}>📂 Directory Structure</h2>
      <pre style={preStyle}>
  <code>
// This project is an Electron app powered by Gatsby for the frontend.<br/>
gatsby-desktop-kit-template/<br/>
├── electron/              // Electron code<br/>
├── gatsby/                // Gatsby frontend<br/>
│   └── .env.example       // Gatsby-specific env template<br/>
├── .env.example           // Electron Root-level env template<br/>
├── docs/                  // Multilingual documentation (ja, zh, en)<br/>
└── scripts/               // ⚠️ Internal scripts — avoid editing unless necessary<br/>
  </code>
</pre>



      <h2 style={h2Style}>📦 Available npm Scripts</h2>
      <ul>
        <li>
          <code style={codeStyle}>npm run dev</code> — Runs Gatsby and Electron
          in parallel for development.<br />
          Internally runs <code style={codeStyle}>dev:web</code> and{" "}
          <code style={codeStyle}>dev:app</code> using{" "}
          <code style={codeStyle}>concurrently</code>.
        </li>
        <li>
          <code style={codeStyle}>npm run dev:web</code> — Starts the Gatsby
          development server inside the <code style={codeStyle}>gatsby</code>{" "}
          folder.
        </li>
        <li>
          <code style={codeStyle}>npm run dev:app</code> — Launches the Electron
          app using <code style={codeStyle}>ts-node</code> with{" "}
          <code style={codeStyle}>electron/main.js</code> as the entry point.
        </li>
      </ul>

      <h2 style={h2Style}>🏗️ Build Commands</h2>
      <ul>
        <li>
          <code style={codeStyle}>npm run build</code> — Full build: Generates
          static site with Gatsby, copies it to Electron, and builds the desktop
          app.
        </li>
        <li>
          <code style={codeStyle}>npm run build:web</code> — Builds the static
          site using <code style={codeStyle}>gatsby build</code> with path
          prefixing enabled.
        </li>
        <li>
          <code style={codeStyle}>npm run build:app</code> — Uses{" "}
          <code style={codeStyle}>electron-builder</code> to package the
          Electron app for production.
        </li>
      </ul>

      <h2 style={h2Style}>📁 Asset Copying</h2>
      <ul>
        <li>
          <code style={codeStyle}>npm run copy</code> — Copies Gatsby’s{" "}
          <code style={codeStyle}>public</code> output into{" "}
          <code style={codeStyle}>electron/public</code> for loading via{" "}
          <code style={codeStyle}>file://</code> or local server.
        </li>
      </ul>

      <h2 style={h2Style}>🧹 Clean Commands</h2>
      <ul>
        <li>
          <code style={codeStyle}>npm run clean</code> — Removes all build
          artifacts from both Gatsby and Electron.
        </li>
        <li>
          <code style={codeStyle}>npm run clean:web</code> — Cleans Gatsby’s{" "}
          <code style={codeStyle}>.cache</code> and{" "}
          <code style={codeStyle}>public</code> directories.
        </li>
        <li>
          <code style={codeStyle}>npm run clean:app</code> — Deletes Electron’s{" "}
          <code style={codeStyle}>dist</code> and{" "}
          <code style={codeStyle}>public</code> folders.
        </li>
      </ul>

      <h2 style={h2Style}>⚙️ .env</h2>
      <p>
        Create a <code style={codeStyle}>.env</code> file from{" "}
        <code style={codeStyle}>.env.example</code> to configure ports and
        metadata:
      </p>
      <pre style={preStyle}>
        <code>
          ELECTRON_PORT=9003
          <br />
          GATSBY_PORT=9000
          <br />
          GATSBY_SERVE_PORT=9001
        </code>
      </pre>

      <h2 style={h2Style}>🧠 Architecture Note</h2>
      <p>
        This project uses <code style={codeStyle}>electron-serve</code> to unify the behavior between the web version and the desktop app.
        <br />
        By serving the Gatsby static output consistently, both environments share the same UI, routing, and storage logic.
        This makes development and testing much simpler and more reliable.
      </p>


      <h2 style={h2Style}>🤝 Contributing</h2>
      <p>
        PRs and issues are welcome — especially for macOS/Linux support and
        improvements.
      </p>

      <p style={footerStyle}>MIT License — &copy; 2025</p>
    </main>
  );
};

export default IndexPage;
