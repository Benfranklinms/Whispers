import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddConfession = () => {

  const [confession, setconfession] = useState("");
  const maxChars = 300;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confession.length > maxChars) {
      toast.error(`Confession exceeds ${maxChars} characters limit.`);
      return;
    }
    if(!confession.trim()){
      toast.error("Confession cannot be empty.");
      return;
    }
    const token = localStorage.getItem("token");

    if (!token) {
      toast.info("You must be logged in to add a confession.");
      navigate("/sign-in");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/confession/add", {
        text: confession}, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
      if (res.status === 201) {
        toast.success("Confession added successfully!");
        setconfession("");
      }
      } catch (err) {
        toast.error("Error adding confession:", err);
      }
  }

  return (
    <main>
      <Navbar />
      <div className="relative flex min-h-screen flex-col bg-white overflow-x-hidden">
        <div className="flex flex-1 flex-col px-10 py-5">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <p className="text-[#171212] tracking-light text-[32px] font-bold leading-tight min-w-72">
              Share Your Story
            </p>
          </div>

          <form onSubmit={handleSubmit}>

          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <p className="text-[#171212] text-base font-medium leading-normal pb-2">
                Confession
              </p>
              <textarea
                placeholder="What's on your mind?"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#171212] focus:outline-0 focus:ring-0 border border-[#e4dddd] bg-white focus:border-[#e4dddd] min-h-36 placeholder:text-[#82686a] p-[15px] text-base font-normal leading-normal"
                value={confession}
                onChange={(e) => setconfession(e.target.value)}
                maxLength={maxChars}
              ></textarea>
            </label>
          </div>

          <p className="text-[#82686a] text-sm font-normal leading-normal pb-3 pt-1 px-4">
            Character limit : {maxChars - confession.length} remaining
          </p>

          <div className="flex px-4 py-3 justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Submit</span>
            </button>
          </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddConfession;
