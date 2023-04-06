const mongoose = require("mongoose");
const ReviewSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "",
    },
    body: {
      type: String,
      required: true,
      default: "",
    },
    link: {
      type: String,
      required: true,
    },
    image: [
      {
        public_id: String,
        url: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
