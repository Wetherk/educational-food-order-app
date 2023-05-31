const path = require("path");

module.exports = function override(config, env) {
    // Add support for importing SVG files as React components
    const svgReactLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    // Find the rule that handles file loading (usually for images) and add the SVG loader
    const fileLoaderRule = config.module.rules.find((rule) =>
        rule.test.test(".svg")
    );
    fileLoaderRule.exclude = svgReactLoader.test;

    config.module.rules.push(svgReactLoader);

    // Allow absolute imports from the src directory
    config.resolve.modules = [path.resolve(__dirname, "src"), "node_modules"];

    return config;
};
