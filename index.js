const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/blogs", express.static(path.join(__dirname, "public/blogs.html")));

app.get("/blogs/:id", async (req, res) => {
  try {
    // Read the blogs.json file
    const data = await fs.readFile("blogs.json", "utf8");
    const blogs = JSON.parse(data);

    // Find the blog with the specified ID
    const blogId = req.params.id;
    const blog = blogs.find((blog) => blog.id === blogId);

    // Render the blog details
    if (blog) {
      res.send(renderBlogDetails(blog));
    } else {
      res.status(404).send("Blog not found");
    }
  } catch (error) {
    console.error("Error reading blogs.json:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api", (req, res) => {
  res.send("Hello, buyerr api!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
