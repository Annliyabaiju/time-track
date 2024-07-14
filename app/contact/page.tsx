"use client";

import React, { useState } from "react";
import { PiLightningBold, PiLightbulb, PiHandTap, PiCaretUp, PiCaretDown } from "react-icons/pi";

const Page: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is task management software, and why do I need it?",
      answer: "Task management software helps you organize, prioritize, and track tasks and projects. It enhances productivity, improves collaboration, and ensures that important deadlines are met.",
    },
    {
      question: "How does task management software improve collaboration?",
      answer: "It provides a centralized platform where team members can communicate, share files, and update task statuses in real-time, ensuring everyone is on the same page.",
    },
    {
      question: "Can I use task management software for personal tasks?",
      answer: "Yes, task management software can help you stay organized with personal projects, set reminders, and track your progress.",
    },
    {
      question: "How does task management software help with time management?",
      answer: "It allows you to prioritize tasks, set deadlines, and allocate time effectively, ensuring that you focus on the most important tasks first.",
    },
    {
      question: "Is task management software suitable for remote teams?",
      answer: "Absolutely! It facilitates communication and collaboration among remote team members, making it easier to manage projects and stay connected.",
    },
    {
      question: "Can I integrate task management software with other tools I use?",
      answer: "Most task management software offers integrations with popular tools like calendars, email, and project management platforms.",
    },
    {
      question: "How secure is my data in task management software?",
      answer: "Security is a priority for most task management software providers. They implement robust security measures to protect your data.",
    },
    {
      question: "What features should I look for in task management software?",
      answer: "Key features to look for include task prioritization, collaboration tools, time tracking, integrations, and a user-friendly interface.",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white p-6 md:p-10">
          <div className="flex flex-col lg:flex-row lg:gap-14 items-center w-full bg-white">
            <div className="w-full lg:w-1/2 p-5 bg-white">
              <div className="text-left bg-white rounded-lg gap-4">
                <div className="relative">
                  <h3 className="font-switzer font-semibold text-[#101010] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    Supercharge Your Workflow with Taskmanly
                  </h3>
                  <p className="mb-4 font-switzer text-left text-[#878787] md:mb-6">
                    Welcome to the future of task management! At Taskmanly, we're dedicated to helping businesses like yours achieve peak efficiency and collaboration. Take the leap towards a more organized workflow.
                  </p>
                  <div className="flex-col flex mt-14 gap-4">
                    <div className="gap-1 flex lg:h-32 md:h-48 sm:h-36 rounded-xl border">
                      <div className="h-10 w-14 ml-2 mt-2 p-1 gap-2 rounded-full bg-neutral-100 text-black">
                        <PiLightningBold className="w-full h-full" />
                      </div>
                      <div className="ml-3 mt-2">
                        <p className="font-switzer font-semibold text-[#101010] text-2xl">
                          Collaborate in Real-Time
                        </p>
                        <p className="text-gray-500 mt-2 text-base font-switzer">
                          Break down silos and boost teamwork with instant collaboration on tasks and projects.
                        </p>
                      </div>
                    </div>
                    <div className="gap-1 flex lg:h-32 md:h-48 sm:h-36 rounded-xl border">
                      <div className="h-10 w-14 ml-2 mt-2 p-1 gap-2 rounded-full bg-neutral-100 text-black">
                        <PiLightbulb className="w-full h-full" />
                      </div>
                      <div className="ml-3">
                        <p className="font-switzer font-semibold text-[#101010] text-2xl">
                          Smart Automation
                        </p>
                        <p className="font-switzer text-base mt-2 text-gray-500">
                          Work smarter, not harder - let intelligent automation handle the repetitive tasks for you.
                        </p>
                      </div>
                    </div>
                    <div className="gap-1 flex lg:h-32 md:h-48 sm:h-36 rounded-xl border">
                      <div className="h-10 w-14 ml-2 mt-2 p-1 gap-2 rounded-full bg-neutral-100 text-black">
                        <PiHandTap className="w-full h-full" />
                      </div>
                      <div className="ml-3">
                        <p className="font-switzer font-semibold text-[#101010] text-2xl">
                          Tailored Workflows
                        </p>
                        <p className="font-switzer mt-2 text-base text-gray-500">
                          Your business, your tasks. Customize Taskmanly to align seamlessly with your unique workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="p-4 md:p-6 shadow-lg rounded-2xl mt-10 lg:mt-0">
                <h2 className="text-xl md:text-2xl lg:3xl font-switzer font-semibold mb-4">
                  Fill out this quick form and we'll get back to you shortly
                </h2>
                <form className="mt-8 space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="h-24">
                      <label htmlFor="first-name" className="block text-base font-medium font-switzer text-left text-black">
                        First Name
                      </label>
                      <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="ex: Robbi" />
                    </div>
                    <div className="h-24">
                      <label htmlFor="last-name" className="block text-base font-medium font-switzer text-left text-black">
                        Last Name
                      </label>
                      <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="ex: Darvis" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="h-24">
                      <label htmlFor="company-email" className="block text-base font-medium font-switzer text-left text-black">
                        Company Email
                      </label>
                      <input type="email" name="company-email" id="company-email" autoComplete="email" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="ex: robbi@taskmanly.com" />
                    </div>
                    <div className="h-24">
                      <label htmlFor="phone-number" className="block text-base font-medium font-switzer text-left text-black">
                        Phone Number
                      </label>
                      <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="ex: 085637228681" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 relative bottom-3">
                    <div className="h-24">
                      <label htmlFor="country" className="block text-base font-medium font-switzer text-left text-black">
                        Country
                      </label>
                      <input type="text" name="country" id="country" autoComplete="country" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="ex: Indonesia" />
                    </div>
                    <div className="h-24">
                      <label htmlFor="company-size" className="block text-base font-medium font-switzer text-left text-black">
                        Company Size
                      </label>
                      <select id="company-size" name="company-size" autoComplete="company-size" className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-gray-500 text-base font-switzer font-normal">
                        <option>Select</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-4 md:mb-6">
                    <label htmlFor="message" className="block text-base font-medium font-switzer text-left text-black">
                      Your Message
                    </label>
                    <textarea name="message" id="message" rows={4} className="mt-3 block w-full rounded-xl border py-5 px-1 shadow-sm text-base font-switzer font-normal" placeholder="Hi, I'm interested in learning more about your services." />
                  </div>
                  <div className="flex items-center">
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
                  <div className="h-14">
                    <button type="submit" className="w-full h-14 text-base font-medium font-switzer mt-3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg mt-10">
            <h2 className="font-switzer text-center font-semibold text-[#101010] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10">
              {faqItems.map((item, index) => (
                <div key={index} className="w-full">
                  <div className={`p-1 border rounded-md ${openIndex === index ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
                    <div className="flex justify-between items-center text-lg font-medium cursor-pointer" onClick={() => handleToggle(index)}>
                      {item.question}
                      {openIndex === index ? (
                        <PiCaretUp className="w-5 h-5 ml-2 text-white" />
                      ) : (
                        <PiCaretDown className="w-5 h-5 ml-2 text-black" />
                      )}
                    </div>
                    {openIndex === index && (
                      <p className="mt-2 bg-white text-black p-3">{item.answer}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
