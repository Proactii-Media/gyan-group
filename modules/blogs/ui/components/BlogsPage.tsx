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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
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
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-malibu/10 to-picton-blue/10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-4"
        >
          <Loader2 className="w-12 h-12 text-picton-blue animate-spin" />
          <p className="text-pewter text-lg">Loading blogs...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-malibu/10 to-picton-blue/10">
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        {/* Blog Cards Grid - 3 columns */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {blogPosts.length > 0 ? (
            blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Image */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="block relative h-64 overflow-hidden"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {post.featured && (
                    <div className="absolute top-4 left-4 bg-teal-green text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-pewter text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <time>{post.date}</time>
                  </div>

                  <Link href={`/blogs/${post.slug}`} className="block">
                    <h3 className="text-xl font-bold text-ebony mb-3 line-clamp-2 group-hover:text-picton-blue transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-pewter text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-2 text-picton-blue font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-pewter text-lg">
                No blog posts available yet.
              </p>
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
    </div>
  );
};
