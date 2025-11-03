"use client";
import React, { lazy, Suspense } from "react";
import Header from "./components/Header";

// Lazy-loaded components
const HeroPage = lazy(() => import("./components/HeroPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Projects = lazy(() => import("./components/Projects"));
const UpcomingProjects = lazy(() => import("./components/UpcomingProjects"));
const History = lazy(() => import("./components/History"));
const USPHighlights = lazy(() => import("./components/USPHighlights"));
const CareerPage = lazy(() => import("./components/CareerPage"));
const Contact = lazy(() => import("./components/Contact"));

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading Hero...
          </div>
        }
      >
        <div id="home">
          <HeroPage />
        </div>
      </Suspense>

      {/* About Us Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading About Us...
          </div>
        }
      >
        <div id="about-us">
          <AboutUs />
        </div>
      </Suspense>

      {/* Projects Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading Projects...
          </div>
        }
      >
        <div id="projects">
          <Projects />
        </div>
      </Suspense>

      {/* Upcoming Projects Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading Upcoming Projects...
          </div>
        }
      >
        <div id="upcoming-projects">
          <UpcomingProjects />
        </div>
      </Suspense>

      {/* History Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading History...
          </div>
        }
      >
        <div id="history">
          <History />
        </div>
      </Suspense>

      {/* USP Highlights / Services Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading USP Highlights...
          </div>
        }
      >
        <div id="usp-highlights">
          <USPHighlights />
        </div>
      </Suspense>

      {/* Career Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading Career Page...
          </div>
        }
      >
        <div id="career">
          <CareerPage />
        </div>
      </Suspense>

      {/* Contact Section */}
      <Suspense
        fallback={
          <div className="h-screen flex items-center justify-center">
            Loading Contact...
          </div>
        }
      >
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
    </div>
  );
}
