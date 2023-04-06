const mongoose = require("mongoose");
const VideoLinks = mongoose.Schema(
  {
    url: [{ url: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Links", VideoLinks);
