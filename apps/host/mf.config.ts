import { federation } from "@module-federation/vite";

export const mfConfig = () =>
  federation({
    name: "vite_mf_host",
    manifest: true,
    dts: {
      tsConfigPath: "./tsconfig.app.json",
      generateTypes: {
        compileInChildProcess: false,
      },
    },
    remotes: {
      // esm_remote: {
      //   type: "module",
      //   name: "esm_remote",
      //   entry: "https://[...]/remoteEntry.js",
      // },
      var_remote: {
        type: "module",
        name: "var_remote",
        entry: "http://localhost:3001/mf-manifest.json",
      },
    },
    //   exposes: {
    //     "./button": "./src/components/button",
    //   },
    shared: {
      react: {
        singleton: true,
      },
      "react/": {
        singleton: true,
      },
    },
  });
