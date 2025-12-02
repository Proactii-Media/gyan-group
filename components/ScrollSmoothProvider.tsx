"use client";
import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { setGlobalSmoother } from "../lib/utils"; // Import the global setter

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const ScrollSmoothProvider = ({ children }: { children: ReactNode }) => {
  const smoothWrapperRef = useRef<HTMLDivElement | null>(null);
  const smoothContentRef = useRef<HTMLDivElement | null>(null);
  const smootherInstance = useRef<ScrollSmoother | null>(null);

  useGSAP(() => {
    // Ensure DOM is ready
    if (!smoothWrapperRef.current || !smoothContentRef.current) return;

    // Kill any existing ScrollSmoother instance
    if (smootherInstance.current) {
      smootherInstance.current.kill();
    }

    // Create ScrollSmoother instance
    smootherInstance.current = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.5, // Smooth scrolling intensity
      effects: true, // Enable data-speed effects
      smoothTouch: 0.1, // Smooth scrolling on touch devices (mobile)
      normalizeScroll: true, // Normalizes scrolling across different devices
    });

    // Set global reference for other components to use
    setGlobalSmoother(smootherInstance.current);

    // Refresh ScrollTrigger instances when ScrollSmoother is ready
    ScrollTrigger.refresh();

    return () => {
      if (smootherInstance.current) {
        smootherInstance.current.kill();
        smootherInstance.current = null;
        setGlobalSmoother(null); // Clear global reference
      }
    };
  }, []);

  // Handle route changes - refresh ScrollSmoother
  useLayoutEffect(() => {
    const refreshSmoother = () => {
      if (smootherInstance.current) {
        // Small delay to ensure DOM is updated
        setTimeout(() => {
          // Guard again inside timeout
          smootherInstance.current?.refresh();
          ScrollTrigger.refresh();
        }, 100);
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener("popstate", refreshSmoother);

    // Also listen for hash changes
    window.addEventListener("hashchange", refreshSmoother);

    return () => {
      window.removeEventListener("popstate", refreshSmoother);
      window.removeEventListener("hashchange", refreshSmoother);
    };
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper">
      <div ref={smoothContentRef} id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmoothProvider;
