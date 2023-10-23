import React from "react";
import { Link } from "react-router-dom";
import Example from "../components/Navbar";
import Footer from "../components/Footer";  

function Home() {
  return (
    <>
        <Example />
        <div className="bg-white min-h-screen flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center p-8">
            <h1 className="text-5xl fon t-bold text-Black mb-6">
              Welcome to COPO Mapping
            </h1>
            <p className="text-xl text-Black mb-8">
              COPO Mapping is an innovative platform that empowers universities
              and faculty to align Course Outcomes (CO) with Program Outcomes
              (PO). With our easy-to-use tools and insightful visualizations, you
              can seamlessly map curriculum elements, analyze student performance,
              and improve the overall educational quality.
            </p>
            <Link
              to="/Form"
              className="border-2 text-Black py-3 px-8 rounded-lg font-semibold shadow-md hover:shadow-2xl hover:shadow-gray-200 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
  
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8 ">
              What are CO and PO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Course Outcomes (CO)
                </h3>
                <p className="text-Black">
                  Course Outcomes are specific statements that describe the
                  knowledge, skills, and competencies that students are expected
                  to demonstrate at the end of a course.
                </p>
              </div>
  
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Program Outcomes (PO)
                </h3>
                <p className="text-Black">
                  Program Outcomes are broad statements that describe the
                  knowledge, skills, and attributes that students should possess
                  upon completing a program.
                </p>
              </div>
            </div>
          </div>
        </div>
  
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-Black sm:text-4xl mb-8">
              How COPO Mapping Helps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 ">
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Curriculum Mapping
                </h3>
                <p className="text-Black">
                  COPO Mapping enables you to map course outcomes to program
                  outcomes, ensuring that each course contributes to the
                  achievement of program objectives.
                </p>
              </div>
  
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Performance Analysis
                </h3>
                <p className="text-Black">
                  Analyze student performance based on mapped outcomes to identify
                  areas of improvement and enhance teaching strategies.
                </p>
              </div>
  
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Data-Driven Decisions
                </h3>
                <p className="text-Black">
                  Utilize data-driven insights to implement evidence-based
                  changes, leading to continuous improvement in educational
                  practices.
                </p>
              </div>
  
              <div className="backdrop-brightness-110 p-6 rounded-2xl shadow-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Collaboration & Communication
                </h3>
                <p className="text-Black">
                  Foster collaboration among faculty members and share mapping
                  results with stakeholders to ensure transparent communication.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
  );
}

export default Home;
