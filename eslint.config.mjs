import nx from "@nx/eslint-plugin";

export default [
    ...nx.configs["flat/base"],
    ...nx.configs["flat/typescript"],
    ...nx.configs["flat/javascript"],
    {
        ignores: ["**/dist", "**/out-tsc", "**/vitest.config.*.timestamp*"],
    },
    {
        files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
        rules: {
            "@nx/enforce-module-boundaries": [
                "error",
                {
                    enforceBuildableLibDependency: true,
                    allow: ["^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$"],
                    depConstraints: [
                        {
                            sourceTag: "type:app",
                            onlyDependOnLibsWithTags: [
                                "type:util",
                                "type:feature",
                            ],
                        },
                        {
                            sourceTag: "type:util",
                            onlyDependOnLibsWithTags: ["type:util"],
                        },
                        {
                            sourceTag: "type:feature",
                            onlyDependOnLibsWithTags: ["type:util"],
                        },
                    ],
                },
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["@org/*/*"],
                            message:
                                "Import from the library's public API instead of its internal files.",
                        },
                    ],
                },
            ],
        },
    },
    {
        files: [
            "**/*.ts",
            "**/*.tsx",
            "**/*.cts",
            "**/*.mts",
            "**/*.js",
            "**/*.jsx",
            "**/*.cjs",
            "**/*.mjs",
        ],
        // Override or add rules here
        rules: {},
    },
];
