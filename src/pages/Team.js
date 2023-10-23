import React from "react";
import Example from "../components/Navbar";
import Footer from "../components/Footer";

const people = [
  {
    name: "Vishal Gohil",
    role: "Back End Devloper",
   },
  {
    name: "Parth Kalma",
    role: "Front End Devloper",
  },
  {
    name: "Divyanshu Jha",
    role: "Front End Devloper",
    },
  // More people...
];

export default function Team() {
  return (
    <>
      <Example />
      <div className="bg-white py-24 sm:py-32 ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700">
              Welcome to our team page! Here you can learn more about the
              talented individuals who make up our team. We work together to
              bring the best solutions to our clients and achieve great results.
              Each team member brings their unique skills and expertise,
              contributing to the success of our projects.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  
                  <div>
                    <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-900 ">
                      {person.name}
                    </h3>
                    <p className=" font-semibold leading-6 text-indigo-700 text-xl">
                      {person.role}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
