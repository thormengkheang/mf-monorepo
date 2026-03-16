import { federation } from "@module-federation/vite";

export const mfConfig = () =>
  federation({
    name: "var_remote",
    manifest: true,
    dts: {
      tsConfigPath: "./tsconfig.app.json",
      generateTypes: {
        compileInChildProcess: false,
      },
    },
    // remotes: {
    //   esm_remote: {
    //     type: "module",
    //     name: "esm_remote",
    //     entry: "https://[...]/remoteEntry.js",
    //   },
    //   var_remote: "var_remote@https://[...]/remoteEntry.js",
    // },
    exposes: {
      // "./App": "./src/App.tsx",
      "./Button": "./src/Button.tsx",
    },
    shared: {
      react: {
        singleton: true,
      },
      "react/": {
        singleton: true,
      },
    },
  });
