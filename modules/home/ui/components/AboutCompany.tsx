"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Target, Users, Beaker, Microscope } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const AboutCompanySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);
  const section3Ref = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Building2,
      title: "A vast experience in custom synthesis since 2003.",
    },
    {
      icon: Target,
      title: "A partner who ensure that your requirements are met.",
    },
    {
      icon: Users,
      title: "A dedicated attentive and responsive team working.",
    },
    {
      icon: Microscope,
      title:
        "A wide range of innovative and not available molecules with high performance.",
    },
    {
      icon: Beaker,
      title:
        "A constant supply of exclusive chemicals coming from our collaboration.",
    },
  ];

  useGSAP(
    () => {
      // Section 1 Animations
      if (section1Ref.current) {
        const heading1 = section1Ref.current.querySelector(".section-heading");
        const title1 = section1Ref.current.querySelector(".section-title");
        const paragraphs1 =
          section1Ref.current.querySelectorAll(".section-text");
        const image1 = section1Ref.current.querySelector(".section-image");

        gsap.from(heading1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(title1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(paragraphs1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.4,
          ease: "power3.out",
        });

        gsap.from(image1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: "top 80%",
          },
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Section 2 Animations
      if (section2Ref.current) {
        const title2 = section2Ref.current.querySelector(".section-title");
        const paragraphs2 =
          section2Ref.current.querySelectorAll(".section-text");
        const quote = section2Ref.current.querySelector(".quote-box");
        const button = section2Ref.current.querySelector(".read-more-btn");
        const image2 = section2Ref.current.querySelector(".section-image");

        gsap.from(image2, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
          },
          x: -50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(title2, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
          },
          x: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(paragraphs2, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.4,
          ease: "power3.out",
        });

        gsap.from(quote, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 70%",
          },
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "back.out(1.2)",
        });

        gsap.from(button, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: "top 70%",
          },
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.8,
          ease: "power3.out",
        });
      }

      // Section 3 Animations
      if (section3Ref.current) {
        const title3 = section3Ref.current.querySelector(".section-title");
        const paragraphs3 =
          section3Ref.current.querySelectorAll(".section-text");
        const image3 = section3Ref.current.querySelector(".section-image");

        gsap.from(title3, {
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(paragraphs3, {
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          delay: 0.2,
          ease: "power3.out",
        });

        gsap.from(image3, {
          scrollTrigger: {
            trigger: section3Ref.current,
            start: "top 80%",
          },
          scale: 0.9,
          opacity: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
        });
      }

      // Features Grid Animation
      if (featuresRef.current) {
        const featuresTitle =
          featuresRef.current.querySelector(".features-title");
        const featureCards =
          featuresRef.current.querySelectorAll(".feature-card");

        gsap.from(featuresTitle, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.from(featureCards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 75%",
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.2,
          ease: "power3.out",
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-ivory py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section - About Gyan Group */}
        <div
          ref={section1Ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32"
        >
          {/* Text Content */}
          <div>
            <h3 className="section-heading text-teal-green text-sm md:text-base font-semibold tracking-wider uppercase mb-4">
              ABOUT GYAN GROUP
            </h3>
            <h2 className="section-title text-ebony text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Gaining knowledge, is the first step to wisdom. Sharing it, is the
              first step to humanity.
            </h2>
            <div className="space-y-4 text-pewter text-base md:text-lg leading-relaxed">
              <p className="section-text">
                <span className="font-semibold text-ebony">
                  Gyan (knowledge)
                </span>{" "}
                is considered as all{" "}
                <span className="font-semibold text-ebony">
                  powerful / omnipotent
                </span>
                , a thing one has to strive to achieve not only for wellbeing of
                all <span className="font-semibold text-ebony">mankind</span>{" "}
                but even for emancipation of its{" "}
                <span className="font-semibold text-ebony">soul</span>.
              </p>
              <p className="section-text">
                <span className="font-semibold text-ebony">Gyan</span> is
                dedicated to{" "}
                <span className="font-semibold text-ebony">
                  Green Chemistry
                </span>{" "}
                with facilities and technical know how available from{" "}
                <span className="font-semibold text-ebony">
                  Research & Development
                </span>{" "}
                work to bulk production of Speciality Chemicals for Bulk Drugs,
                Agro-chemicals, Dyes & Pigments, Polymers, perfumery chemicals.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="section-image relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/aboutimg1.jpg"
              alt="Chemical molecules structure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ebony/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Second Section - Our History */}
        <div
          ref={section2Ref}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image */}
          <div className="section-image relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl lg:order-1 group">
            <Image
              src="/aboutimg2.jpg"
              alt="Laboratory research"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-ebony/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Text Content */}
          <div className="lg:order-2">
            <h2 className="section-title text-teal-green text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our History
            </h2>
            <div className="space-y-4 text-pewter text-base md:text-lg leading-relaxed mb-8">
              <p className="section-text">
                Gyan started its journey to become a{" "}
                <span className="font-semibold text-ebony">little giant</span>{" "}
                in the field of Chemical Technology by inception of{" "}
                <span className="font-semibold text-ebony">
                  Gyan Technology
                </span>{" "}
                in <span className="font-semibold text-ebony">2008</span> in a
                Chemical industrial township of{" "}
                <span className="font-semibold text-ebony">
                  Vapi, Gujarat, India
                </span>
                . Expanding its scale of production, in{" "}
                <span className="font-semibold text-ebony">2013 Gyan</span> came
                up with{" "}
                <span className="font-semibold text-ebony">
                  Gyan Healthcare
                </span>{" "}
                state-of-the-art bulk production facility at{" "}
                <span className="font-semibold text-ebony">
                  Junagadh, Gujarat, India
                </span>{" "}
                and further consolidated its manufacturing facility by adding up
                another production facility at{" "}
                <span className="font-semibold text-ebony">
                  Sarigam, Gujarat, India
                </span>{" "}
                namely Reliable life Science in{" "}
                <span className="font-semibold text-ebony">2017</span>.
              </p>
            </div>

            {/* Quote */}
            <div className="quote-box border-l-4 border-teal-green pl-6 py-4 mb-8 bg-teal-green/10 rounded-r-lg transition-colors duration-300">
              <p className="text-ebony text-lg md:text-xl italic leading-relaxed">
                &quot;We strive to become acknowledged Global Leaders and
                preferred Partners in helping our Clients succeed in the rapidly
                evolving Pharmaceutical markets.&quot;
              </p>
            </div>

            {/* Read More Button */}
            <Link
              href="/about/company-profile"
              className="read-more-btn inline-flex items-center gap-2 px-8 py-3 bg-teal-green text-white font-semibold rounded-lg hover:bg-turquoise-blue transition-all duration-300 shadow-lg hover:shadow-xl hover:gap-3 group"
            >
              Read More
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Custom Synthesis Section */}
        <div className="mt-20 lg:mt-32">
          <div
            ref={section3Ref}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <h2 className="section-title text-teal-green text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Custom Synthesis
              </h2>
              <div className="space-y-4 text-pewter text-base md:text-lg leading-relaxed mb-8">
                <p className="section-text">
                  <span className="font-semibold text-ebony">
                    Custom synthesis
                  </span>{" "}
                  is the process where a{" "}
                  <span className="font-semibold text-ebony">molecule</span> is
                  made exclusively for a particular client according to{" "}
                  <span className="font-semibold text-ebony">
                    specifications
                  </span>{" "}
                  at their scale. As a reminder, in the chemistry world the
                  synthesis of{" "}
                  <span className="font-semibold text-ebony">chemicals</span> is
                  set up on a single or several chemical reactions process which{" "}
                  <span className="font-semibold text-ebony">targets</span> the
                  development of a{" "}
                  <span className="font-semibold text-ebony">
                    complex chemical
                  </span>{" "}
                  from reactants or other substances.
                </p>
                <p className="section-text">
                  We are involved in numerous{" "}
                  <span className="font-semibold text-ebony">
                    industrial projects
                  </span>{" "}
                  and collaborative partnerships, and we are attached to{" "}
                  <span className="font-semibold text-ebony">continuously</span>{" "}
                  expand our internal{" "}
                  <span className="font-semibold text-ebony">R&D programs</span>{" "}
                  to maintain a high level of competence and innovation in many
                  fields of{" "}
                  <span className="font-semibold text-ebony">
                    organic chemistry
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="section-image relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/aboutimg3.jpg"
                alt="Custom synthesis laboratory"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-ebony/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Features Grid */}
          <div ref={featuresRef} className="mt-16">
            <h3 className="features-title text-ebony text-2xl md:text-3xl font-bold mb-8 text-center">
              You must work with us if you are looking for:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="feature-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-teal-green/10 hover:border-teal-green/30 hover:-translate-y-2 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-teal-green/10 flex items-center justify-center mb-4 group-hover:bg-teal-green/20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-7 h-7 text-teal-green group-hover:text-turquoise-blue transition-colors duration-300" />
                    </div>
                    <p className="text-ebony text-base font-medium leading-relaxed">
                      {feature.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
