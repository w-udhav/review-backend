const review = require("../schema/review");
const links = require("../schema/links");

const ReviewCreate = async (req, res) => {
  const { title, body, link, image } = req.body;
  let data = new review({
    title,
    body,
    link,
    image,
  });

  data
    .save()
    .then((doc) => {
      res
        .status(200)
        .json({ message: "Review created successfully", data: doc });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error creating inventory", err: err.message });
    });
};

const LinksCreate = async (req, res) => {
  const { url } = req.body;
  let data = new links({
    url,
  });

  data
    .save()
    .then((doc) => {
      res.status(200).json({ message: "Link created successfully", data: doc });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Error creating inventory", err: err.message });
    });
};

module.exports = {
  ReviewCreate,
  LinksCreate,
};
