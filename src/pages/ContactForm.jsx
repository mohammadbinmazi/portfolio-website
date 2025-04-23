import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_7ztcscn";
    const templateId = "template_258wn6a";
    const publicKey = "t8SCSKS0NG9nvJP00";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Mohammad bin Mazi",
      message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setFeedback("✅ Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setFeedback("❌ Failed to send email. Please try again.");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setFeedback(""), 3000);
      });
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl text-white p-4 sm:p-6 lg:ml-60 ">
      <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 text-center mb-5">
        Contact Me
      </h2>

      {feedback && (
        <div
          className="mb-4 text-center font-medium py-2 px-3 rounded-md text-sm"
          style={{
            backgroundColor: feedback.includes("✅") ? "#16a34a" : "#dc2626",
          }}
        >
          {feedback}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-base ">
        <div>
          <label className="block text-purple-200 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2.5 bg-white/20 text-white placeholder-purple-100 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block text-purple-200 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 bg-white/20 text-white placeholder-purple-100 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <label className="block text-purple-200 font-medium mb-1">
            Message
          </label>
          <textarea
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="4"
            className="w-full p-2.5 bg-white/20 text-white placeholder-purple-100 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
