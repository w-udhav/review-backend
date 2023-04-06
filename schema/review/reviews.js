const mongoose = require("mongoose");
const ReviewsSchema = mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("reviews", ReviewsSchema);
