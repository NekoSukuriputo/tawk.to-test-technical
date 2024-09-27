"use strict";

const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const dataObj = require("./data/data.json");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    path: path.resolve(__dirname, "./dist"),
    publicPath: "/dist/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader", // Untuk memuat CSS di dalam file .vue
          "css-loader", // Untuk memproses CSS
          "postcss-loader", // Untuk memproses Tailwind dengan PostCSS
        ],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  resolve: {
    alias: {
      fonts: path.resolve(__dirname, "src/assets/fonts"),
      "@": path.resolve(__dirname, "src"),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    historyApiFallback: true,
    before: function (app, server, compiler) {
      app.get("/api/categories", function (req, res) {
        res.json(dataObj.categories);
      });

      app.get("/api/category/*", function (req, res) {
        let category = {};
        const categoryId = req.params["0"];

        for (let index = 0; index < dataObj.categories.length; index++) {
          if (dataObj.categories[index].id === categoryId) {
            category = dataObj.categories[index];
            break;
          }
        }
        res.json(category);
      });

      app.get("/api/author/*", function (req, res) {
        let author = {};
        const authorId = req.params["0"];

        for (let index = 0; index < dataObj.authors.length; index++) {
          if (dataObj.authors[index].id === authorId) {
            author = dataObj.authors[index];
            break;
          }
        }
        res.json(author);
      });

      app.get("/api/articles", function (req, res) {
        res.json(dataObj.articles);
      });

      app.get("/api/article/*", function (req, res) {
        let article = {};
        const articleId = req.params["0"];

        for (let index = 0; index < dataObj.articles.length; index++) {
          if (article.articles[index].id === articleId) {
            author = dataObj.articles[index];
            break;
          }
        }
        res.json(article);
      });

      app.get("/api/search/*", function (req, res) {
        res.json(dataObj.articles);
      });
    },
  },
};
