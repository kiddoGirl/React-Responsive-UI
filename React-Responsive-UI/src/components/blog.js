import React from "react";
import "../index.css";

const BlogSection = () => {

  const blogs = [

    {
      category: "Design",
      title: "UX review presentations",
      description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      blogImage: "/blog-3.png",
      profileImage: "/profile.png",
      arrowImage: "/arrow.png",
    },

    {
      category: "Product",
      title: "Migrating to Linear 101",
      description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      blogImage: "/blog-1.png",
      profileImage: "/profile-2.png",
      arrowImage: "/arrow.png",
    },

    {
      category: "Software Engineering",
      title: "Building your API stack",
      description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      blogImage: "/blog-2.png",
      profileImage: "/profile-3.png",
      arrowImage: "/arrow.png",
    },

  ];


  return (

    <div className="blog-grid">


      {blogs.map((blog, index) => (

        <div className="blog-container" key={index}>


          <img src={blog.blogImage} alt="Blog" className="blog-image" />

          <p className="blog-category">{blog.category}</p>

          <h3 className="blog-title">
            {blog.title}{" "}
            <img src={blog.arrowImage} alt="Arrow" className="arrow-icon" />
          </h3>

          <p className="blog-description">{blog.description}</p>

          <div className="blog-footer">

            <img src={blog.profileImage} alt="Author" className="profile-image" />

            <div className="author-details">
              <p className="author-name">{blog.author}</p>
              <p className="blog-date">{blog.date}</p>
            </div>

          </div>

        </div>

      ))}

    </div>

  );

};

export default BlogSection;
