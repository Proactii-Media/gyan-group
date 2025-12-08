"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { getAllBlogs } from "@/modules/admin/blogs/server/actions";
import { formatDate } from "@/lib/utils";
import { BlogPost, PLACEHOLDER_IMAGE, createExcerpt } from "../types";
import { convertRichTextToHtml } from "@/lib/rich-text";

export const BlogsPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blogs from database
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const result = await getAllBlogs({ status: "published" });

        if (result.success && result.data) {
          const formattedBlogs: BlogPost[] = result.data.map((blog) => {
            const htmlContent = convertRichTextToHtml(blog.content);
            return {
              id: blog.id,
              title: blog.title,
              excerpt: createExcerpt(htmlContent, 150),
              image: blog.image || PLACEHOLDER_IMAGE,
              date: formatDate(blog.createdAt, "short"),
              slug: blog.slug,
              featured: blog.featured,
            };
          });
          setBlogPosts(formattedBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Newsletter subscription:", email);
    setIsSubscribed(true);
    setEmail("");
    setIsSubmitting(false);

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const featuredImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const featuredContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const contentItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const newsletterVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const newsletterItemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  if (isLoading) {
    return (
      <section className="bg-ivory py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-[400px] text-pewter">
            <Loader2 className="w-12 h-12 text-teal-green animate-spin" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-ivory py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 md:mb-20 bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image */}
              <motion.div
                variants={featuredImageVariants}
                className="relative h-[300px] lg:h-auto"
              >
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-teal-green text-white text-xs font-bold px-4 py-2 rounded-full uppercase">
                    Featured
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={featuredContentVariants}
                className="p-8 md:p-10 lg:p-12 flex flex-col justify-center"
              >
                <motion.div
                  variants={contentItemVariants}
                  className="flex items-center gap-2 text-pewter text-sm mb-4"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </motion.div>

                <motion.h2
                  variants={contentItemVariants}
                  className="text-ebony text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight"
                >
                  {featuredPost.title}
                </motion.h2>

                <motion.p
                  variants={contentItemVariants}
                  className="text-pewter text-base md:text-lg leading-relaxed mb-6"
                >
                  {featuredPost.excerpt}
                </motion.p>

                <motion.div variants={contentItemVariants}>
                  <Link
                    href={`/blogs/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-teal-green font-semibold hover:text-turquoise-blue transition-colors duration-300 group"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Blog Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-20"
        >
          {regularPosts.length > 0 ? (
            regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-[240px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pewter text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>

                  <h3 className="text-ebony text-xl font-bold mb-3 leading-tight line-clamp-2 group-hover:text-teal-green transition-colors duration-300">
                    {post.title}
                  </h3>

                  <p className="text-pewter text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-teal-green font-semibold hover:text-turquoise-blue transition-colors duration-300 group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-pewter py-12">
              No blog posts available yet.
            </div>
          )}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={newsletterVariants}
          className="relative bg-linear-to-r from-teal-green to-turquoise-blue rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="newsletter-pattern"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="20" cy="20" r="2" fill="white" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#newsletter-pattern)"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2
              variants={newsletterItemVariants}
              className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              Stay Updated with Our Newsletter
            </motion.h2>
            <motion.p
              variants={newsletterItemVariants}
              className="text-white/90 text-base md:text-lg mb-8"
            >
              Get the latest insights and updates delivered directly to your
              inbox.
            </motion.p>

            {/* Success Message */}
            {isSubscribed && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-4 text-white"
              >
                ✓ Thank you for subscribing! Check your inbox for confirmation.
              </motion.div>
            )}

            {/* Form */}
            <motion.form
              variants={newsletterItemVariants}
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 max-w-md px-6 py-3 rounded-lg bg-white text-ebony placeholder:text-pewter focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white text-teal-green font-semibold rounded-lg hover:bg-ivory transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
