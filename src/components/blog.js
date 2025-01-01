import React from "react";
import "../index.css";

const BlogSection = () => {

  return (

    <div className="blog-section">

        <h3>Latest Blog Posts</h3>

        <p>Tools and strategies modern teams need to help their companies grow.</p>

        <div className="blog-cards">

            <div className="blog-card">

                <img src="/blog-3.jpg" alt="Blog Post 1" className="blog-image" />

                <h4>UX Review Presentations</h4>

                <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>

                <span>Design | Olivia Rhye | 20 Jan 2024</span>

            </div>


            <div className="blog-card">

                <img src="/blog-1.jpg" alt="Blog Post 2" className="blog-image" />

                <h4>Migrating to Linear 101</h4>

                <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.</p>

                <span>Product | Phoenix Baker | 19 Jan 2024</span>

            </div>


            <div className="blog-card">

                <img src="/blog-2.jpg" alt="Blog Post 3" className="blog-image" />

                <h4>Building Your API Stack</h4>

                <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p>

                <span>Software Engineering | Lana Steiner | 18 Jan 2024</span>

            </div>


        </div>

        <button className="view-all-btn">View All Posts</button>

    
        <div className="cta-section">

            <h3>Start your free trial</h3>

            <p>Join over 4,000+ startups already growing with Untitled.</p>

            <div className="cta-buttons">
                <button className="learn-more-btn">Learn More</button>
                <button className="get-started-btn">Get Started</button>
            </div>

        </div>

    </div>
   

  );
};

export default BlogSection;


