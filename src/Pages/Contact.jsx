import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import messageIMG from "../images/image1.png";
import callIMG from "../images/image1.png";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
    topic: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Submit query");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formDetails.message.length > 500) {
      alert("Message should not exceed 500 characters.");
      return;
    }

    setButtonText("Sending...");

    axios
      .post(
        "https://contact-page-backend.onrender.com/api/v1/newContact",
        formDetails
      )
      .then((response) => {
        toast.success("Message sent successfully");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: "Message sent successfully" });
      })
      .catch((error) => {
        toast.error("Something Went Wrong");
        setStatus({
          success: false,
          message: "Something went wrong, please try again later.",
        });
      })
      .finally(() => {
        setButtonText("Submit query");
      });
  };

  return (
    <section className="contact bg-gray-100 py-16" id="contact">
      <Toaster />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-5/12">
            <h1 className="text-4xl font-bold mb-8">
              Contact Us, We're Ready to Help!
            </h1>
            <p className="text-lg mb-2 leading-relaxed">
              We strive to provide you with the best
            </p>
            <p className="text-lg mb-2 leading-relaxed">
              experience and the best platform to find your
            </p>
            <p className="text-lg mb-4 leading-relaxed">choice.</p>
            <p className="text-lg mb-6">
              Post us any queries and we’ll get back to you.
            </p>

            <div className="flex items-start mb-6">
              <div className="w-1/4">
                <img
                  src={messageIMG}
                  alt="Message Icon"
                  className="w-16 h-16"
                />
              </div>
              <div className="w-3/4 ml-4">
                <h3 className="text-xl font-semibold">
                  <span className="text-green-500">Chat with us !!</span>
                </h3>
                <p className="text-lg mb-1">
                  Our friendly team is here to help
                </p>
                <span className="text-lg">aadiarogya@gmail.com</span>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-1/4">
                <img src={callIMG} alt="Call Icon" className="w-16 h-16" />
              </div>
              <div className="w-3/4 ml-4">
                <h3 className="text-xl font-semibold">
                  <span className="text-green-500">Call us...</span>
                </h3>
                <p className="text-lg mb-1">Mon - Fri 8 am to 10 pm</p>
                <span className="text-lg">+91 XXXXXXXXXX</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-5/12">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="topic" className="block text-gray-700">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formDetails.topic}
                    onChange={(e) => onFormUpdate("topic", e.target.value)}
                    className="form-select mt-1 block w-full  bg-gray-100 text-gray-800 border-gray-300 rounded-md"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="Inquiry">Inquiry</option>
                    <option value="Report Bug">Report Bug</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formDetails.name}
                    placeholder="johndoe"
                    onChange={(e) => onFormUpdate("name", e.target.value)}
                    className="form-input mt-1 block w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formDetails.email}
                    placeholder="name@provider.com"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    className="form-input mt-1 block w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    id="message"
                    value={formDetails.message}
                    placeholder="Type your Message...."
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    className="form-textarea mt-1 block w-full bg-gray-100 text-gray-800 border-gray-300 rounded-md"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
                  >
                    {buttonText}
                  </button>
                  {status.message && (
                    <p
                      className={
                        status.success === false
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {status.message}
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
