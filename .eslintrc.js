module.exports = {
    "parserOptions": {
      "ecmaVersion": 2017
    },
    "env": {
      "es6": true,
      "node": true
    },
    "extends": "eslint:recommended",
    "rules": {
      "no-console": "off",
      "indent": [
        "error",
        2,
        {
          "SwitchCase": 1
        }
      ],
      "linebreak-style": 0,
       
      "quotes": [
        "warn",
        "double"
      ],
      "semi": [
        "warn",
        "always"
      ],
      "keyword-spacing": [
        "error", {
          "before": true,
          "after": true
        }
      ],
      "space-before-blocks": [
        "error", {
          "functions":"always",
          "keywords": "always",
          "classes": "always"
        }
      ],
      "space-before-function-paren": [
        "error", {
          "anonymous": "never",
          "named": "never",
          "asyncArrow": "always"
        }
      ],
      "prefer-const": [
        "error", {
          "destructuring": "any",
          "ignoreReadBeforeAssign": false
        }
      ]
    }
     
};