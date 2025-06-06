import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import {db} from "../Components/lib/firebaseConfig.js"
import toast, { Toaster } from "react-hot-toast";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "messages"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp()
      });
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error adding message: ", error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-gray-400 mb-10">
          Have a project in mind or want to collaborate? Drop me a message.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2 text-left">
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md placeholder-gray-500 text-white"
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 bg-gray-900 border border-gray-700 rounded-md placeholder-gray-500 text-white"
          />
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="p-3 sm:col-span-2 bg-gray-900 border border-gray-700 rounded-md placeholder-gray-500 text-white"
          />
          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-gray-300 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      </div>
    </section>
  );
};

export default Contact;
