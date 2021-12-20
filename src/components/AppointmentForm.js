import React, { useState } from "react";

export default function AppointmentForm() {
  const [appoDate, setAppoDate] = useState("2021-12-01");
  const [duration, setDuration] = useState(60);
  const [startTime, setStartTime] = useState("15:20");
  const [appoType, setAppoType] = useState("online");
  function handleSubmit(e) {
    e.preventDefault();
    let newAppo = {
      appointment_date: appoDate,
      duration,
      doctor: "s",
      startTime,
      appointment_type: appoType,
    };
    console.log(newAppo);
  }
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center w-4/5 my-12 gap-2">
        <h2 className="font-bold text-3xl my-4">Set an Appointment Now</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex justify-between items-center gap-5 my-3">
            <label className="font-bold">Preferred Date:</label>
            <input
              className="border-b-2 border-teal-500"
              type="date"
              value={appoDate}
              onChange={(e) => {
                setAppoDate(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between items-center gap-5 my-3">
            <label className="font-bold">Duration (minutes):</label>
            <select
              className="border-b-2 border-teal-500"
              value={duration}
              onChange={(e) => {
                setDuration(e.target.val);
              }}
            >
              <option value="60">60</option>
              <option value="90">90</option>
              <option value="120">120</option>
            </select>
          </div>
          <div className="flex justify-between items-center gap-5 my-3">
            <label className="font-bold">Start Time:</label>
            <input
              className="border-b-2 border-teal-500"
              type="time"
              id="appt"
              name="appt"
              min="09:00"
              max="18:00"
              value={startTime}
              onChange={(e) => {
                setStartTime(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-between items-center gap-5 my-3">
            <label className="font-bold">Appointment Type:</label>
            <select
              className="border-b-2 border-teal-500"
              value={appoType}
              onChange={(e) => {
                setAppoType(e.target.value);
              }}
            >
              <option value="online">Online</option>
              <option value="facetoface">Face To Face</option>
              <option value="anonymous">Anonymous</option>
            </select>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
