// @ts-check
import { defineEslint } from "@niushuaibing/front-config";

export default defineEslint({
    stylistic: {
        semi: true,
    },
    flatESLintConfig: [{
        ignores: ["out"],
    }],
});