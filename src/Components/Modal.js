import React, { useState } from "react";
import axios from "axios";

const Modal = () => {
  const [reffereralObject, setReffereralObject] = useState({
    refereeEmail: "",
    refereeName: "",
    referrerName: "",
    referrerEmail: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !reffereralObject.referrerName ||
      !reffereralObject.referrerEmail ||
      !reffereralObject.refereeName ||
      !reffereralObject.refereeEmail
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/referrals", {
        referrerName: reffereralObject.referrerName,
        referrerEmail: reffereralObject.referrerEmail,
        refereeName: reffereralObject.refereeEmail,
        refereeEmail: reffereralObject.refereeEmail,
      });
      console.log(response);
      setSuccess("Referral submitted successfully!");
      setError("");
      setReffereralObject({
        refereeEmail: "",
        refereeName: "",
        referrerName: "",
        referrerEmail: "",
      });
    } catch (error) {
      setError("An error occurred. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className=" fixed inset-0 z-10">
      <div className="max-w-md mx-auto mt-10 p-5 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-5 text-center">Refer a Friend </h1>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Name</label>
            <input
              type="text"
              value={reffereralObject.referrerName}
              onChange={(e) =>
                setReffereralObject({ ...reffereralObject, referrerName: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referrer Email</label>
            <input
              type="email"
              value={reffereralObject.referrerEmail}
              onChange={(e) =>
                setReffereralObject({ ...reffereralObject, referrerEmail: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Name</label>
            <input
              type="text"
              value={reffereralObject.refereeName}
              onChange={(e) =>
                setReffereralObject({ ...reffereralObject, refereeName: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Referee Email</label>
            <input
              type="email"
              value={reffereralObject.refereeEmail}
              onChange={(e) =>
                setReffereralObject({ ...reffereralObject, refereeEmail: e.target.value })
              }
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md"
          >
            Refer Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
