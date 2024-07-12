import React from "react";
import { PiLightningBold } from "react-icons/pi";

const ContactPage = () => {
  return (
    <div className=" p-4 md:p-8">
      <div className="max-w-7xl  mx-auto">
        <div className="bg-white p-6 md:p-6 ">
          <div className="flex h-screen flex-col sm:flex-col  md:flex-row items-center lg:flex-row w-screen bg-white">
          <div className="  w-full sm:w-1/4 md:w-1/3  lg:w-1/2 h-[707] lg:gap-y-20 md:gap-y-6  flex items-center justify-center lg:p-1 p-5 bg-white">
          <div className="w-full max-w-lg text-left  bg-white rounded-lg gap-4">
           <div className="relative top-25%"> <div className="top-10"><h2 className=" font-switzer font-semibold  text-[#101010] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
                  Supercharge Your Workflow with Taskmanly
                </h2>
                <p className="mb-4 font-switzer text-left text-[#878787] md:mb-6">
                  Welcome to the future of task management! At Taskmanly, we're
                  dedicated to helping businesses like yours achieve peak
                  efficiency and collaboration. Take the leap towards a more
                  organized workflow.
                </p></div>

                <div className="flex-col flex gap-4"> 
                    <div className="gap-1 flex  rounded-xl border">
                  <div className="h-13 w-13 p-1 gap-2 rounded-tl-full  text-black">
                    <PiLightningBold className="w-full h-full -mt-4" />
                  </div>
                  <div className="ml-3 " >
                    <p className="text-lg font-medium text-gray-900">
                      Collaborate in Real-Time
                    </p>
                    <p className="text-gray-500">
                      Break down silos and boost teamwork with instant
                      collaboration on tasks and projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg font-medium text-gray-900">
                      Smart Automation
                    </p>
                    <p className="text-gray-500">
                      Work smarter, not harder - let intelligent automation
                      handle the repetitive tasks for you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div className="ml-3" >
                    <p className="text-lg font-medium text-gray-900">
                      Tailored Workflows
                    </p>
                    <p className="text-gray-500">
                      Your business, your tasks. Customize Taskmanly to align
                      seamlessly with your unique workflows.
                    </p>
                  </div>
                </div>
              </div></div>
            </div></div>

            <div className="bg-gray-50 p-4 md:p-6 shadow-sm rounded-lg -full  md:w-4/3 h-full">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Fill out this quick form and we'll get back to you shortly
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Robbi"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Daniels"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Company Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="robbi@taskmanly.com"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="085273782631"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Country</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>Indonesia</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Company Size</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
                    <option>Select</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    What topic are you interested in exploring?
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    placeholder="Enter your message"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    <input type="checkbox" className="mr-2" />
                    By checking the box you agree to our{" "}
                    <a href="#" className="text-blue-500 underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-500 underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="bg-white p-4 md:p-6 shadow-lg rounded-lg mt-6 md:mt-8">
            <h2 className="text-xl md:text-2xl font-bold mt-11 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  What is task management software, and why do I need it?
                </summary>
                <p className="mt-2 text-gray-500">
                  Task management software helps you organize, prioritize, and
                  track tasks and projects. It enhances productivity, improves
                  collaboration, and ensures that important deadlines are met.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  How does task management software improve collaboration?
                </summary>
                <p className="mt-2 text-gray-500">
                  It provides a centralized platform where team members can
                  communicate, share files, and update task statuses in
                  real-time, ensuring everyone is on the same page.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  Can I use task management software for personal tasks?
                </summary>
                <p className="mt-2 text-gray-500">
                  Yes, task management software can help you stay organized with
                  personal projects, set reminders, and track your progress.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  How does task management software help with time management?
                </summary>
                <p className="mt-2 text-gray-500">
                  It allows you to prioritize tasks, set deadlines, and allocate
                  time effectively, ensuring that you focus on the most
                  important tasks first.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  Is task management software suitable for remote teams?
                </summary>
                <p className="mt-2 text-gray-500">
                  Absolutely! It facilitates communication and collaboration
                  among remote team members, making it easier to manage projects
                  and stay connected.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  Can I integrate task management software with other tools I
                  use?
                </summary>
                <p className="mt-2 text-gray-500">
                  Most task management software offers integrations with popular
                  tools like calendars, email, and project management platforms.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  How secure is my data in task management software?
                </summary>
                <p className="mt-2 text-gray-500">
                  Security is a priority for most task management software
                  providers. They implement robust security measures to protect
                  your data.
                </p>
              </details>
              <details className="p-4 border border-gray-200 rounded-md">
                <summary className="text-lg font-medium">
                  What features should I look for in task management software?
                </summary>
                <p className="mt-2 text-gray-500">
                  Key features to look for include task prioritization,
                  collaboration tools, time tracking, integrations, and a
                  user-friendly interface.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
