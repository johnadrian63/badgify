import { defineConfig } from "vitest/config";

export default defineConfig(() => ({
    root: import.meta.dirname,
    cacheDir: "../../node_modules/.vite/libs/form.builder",
    resolve: {
        tsconfigPaths: true,
    },
    test: {
        name: "form.builder",
        watch: false,
        globals: true,
        environment: "node",
        include: [
            "{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
        ],
        reporters: ["default"],
        coverage: {
            reportsDirectory: "../../coverage/libs/form.builder",
            provider: "v8" as const,
        },
    },
}));
