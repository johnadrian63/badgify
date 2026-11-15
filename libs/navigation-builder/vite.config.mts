/// <reference types='vitest' />
import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";

export default defineConfig(() => ({
    root: import.meta.dirname,
    cacheDir: "../../node_modules/.vite/libs/navigation-builder",
    resolve: {
        tsconfigPaths: true,
    },
    plugins: [angular()],
    // Uncomment this if you are using workers.
    // worker: {
    //  plugins: [],
    // },
    test: {
        name: "navigation-builder",
        watch: false,
        globals: true,
        environment: "jsdom",
        include: [
            "{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        ],
        setupFiles: ["src/test-setup.ts"],
        reporters: ["default"],
        coverage: {
            reportsDirectory: "../../coverage/libs/navigation-builder",
            provider: "v8" as const,
        },
    },
}));
