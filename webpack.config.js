module.exports = {
 // ...
 mode: "production",
 optimization: {
  splitChunks: {
   chunks: "all",
  },
 },
 module: {
  rules: [
   {
    test: /\.(png|jpg|gif)$/i,
    use: [
     {
      loader: "url-loader",
      options: {
       limit: 8192, // giới hạn dung lượng, nếu nhỏ hơn, sẽ chuyển thành base64
      },
     },
    ],
   },
  ],
 },
 resolve: {
  modules: ["s"],
  extensions: [".js", ".jsx"],
 },
 devtool: "cheap-source-map",
};
