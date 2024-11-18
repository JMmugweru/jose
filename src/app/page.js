"use client";

import HeroSection from "@/components/HeroSection";
import { useState } from "react";
import CourseDetails from "./CourseDetails";
import Card from "@/components/Card";
import { courses } from "../../Data";
import Instructors from "@/components/Instructors";
import Pricing from "@/components/Pricing";
import { ReactLenis } from "lenis/react";

const Homepage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <ReactLenis root>
      <HeroSection />
      <main className="my-10">
        <h1 className="text-4xl font-bold text-center my-10">
          {selectedCourse ? "Course Details" : "Our Courses"}
        </h1>
        {selectedCourse ? (
          <CourseDetails course={selectedCourse} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto px-4 lg:px-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                course={course}
                onClick={(id) =>
                  setSelectedCourse(courses.find((c) => c.id === id))
                }
              />
            ))}
          </div>
        )}
      </main>
      <Instructors />
      <Pricing />
    </ReactLenis>
  );
};

export default Homepage;
