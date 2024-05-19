module.exports = {
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    transform: {
        "^.+\\.vue$": "vue-jest",
        "^.+\\.js$": "babel-jest",
    },
    testMatch: ["**/__tests__/**/*.spec.js"],
    testURL: "http://localhost/",
};