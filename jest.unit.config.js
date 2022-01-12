module.exports = {
  roots: ["<rootDir>/test"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },

  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!**/*.d.ts"],
  coveragePathIgnorePatterns: [".+\\.d\\.ts", "inversify.*"],
};
