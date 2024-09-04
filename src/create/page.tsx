import React, { useState } from "react";
import axios from "axios";

const CreateGreetingCard = () => {
  const [subject, setSubject] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [message, setMessage] = useState("");
  const [cardUrl, setCardUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("/api/createCard", {
        subject,
        teacherName,
        message,
      });

      setCardUrl(response.data.cardUrl);
    } catch (error) {
      console.error("Error creating card:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-8" style={{ fontFamily: "Poppins" }}>
        Create Your Teacher's Day Greeting Card
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-300"
          >
            Teacher's Subject (Optional)
          </label>
          <input
            type="text"
            id="subject"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="teacherName"
            className="block text-sm font-medium text-gray-300"
          >
            Teacher's Name (Optional)
          </label>
          <input
            type="text"
            id="teacherName"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-300"
          >
            Greeting Message (Optional)
          </label>
          <textarea
            id="message"
            className="mt-1 block w-full px-3 py-2 bg-gray-700 text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all text-white py-2 px-4 rounded-md shadow-sm"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Card"}
        </button>
      </form>

      {cardUrl && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Your Greeting Card:</h2>
          <img
            src={cardUrl}
            alt="Greeting Card"
            className="rounded-lg shadow-lg"
          />
          <a
            href={cardUrl}
            download="greeting_card.png"
            className="mt-4 inline-block bg-green-500 hover:bg-green-600 transition-all text-white py-2 px-4 rounded-md"
          >
            Download Card
          </a>
        </div>
      )}
    </div>
  );
};

export default CreateGreetingCard;
