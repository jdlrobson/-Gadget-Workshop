module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "ignorePatterns": [
        "GadgetListingEditor/original.js"
    ],
    "extends": "eslint:recommended",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "globals": {
        "module": "writable",
        "$": "readonly",
        "mw": "readonly"
    },
    "rules": {
    }
}
