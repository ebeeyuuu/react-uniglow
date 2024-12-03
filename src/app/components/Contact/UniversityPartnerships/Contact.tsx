import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-linear-to-b from-[#020202] to-purple-900/20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12 text-center bg-linear-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Contact Us
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <p className="text-white mb-4">Email: partnerships@uniglow.com</p>
            <p className="text-white mb-4">Phone: +1 (555) 123-4567</p>
          </div>
          <div className="w-full md:w-1/2">
            <form className="max-w-4xl mx-auto bg-purple-800/30 backdrop-blur-md rounded-lg overflow-hidden p-8">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 bg-purple-700/50 rounded-sm text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 bg-purple-700/50 rounded-sm text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-white text-lg font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full p-2 bg-purple-700/50 rounded-sm text-white"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-sm hover:bg-purple-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
