import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Confessions = () => {
  const [confession, setConfession] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfessions = async () => {
      try {
        const res = await axios.get("http://localhost:3000/confession/all");
        setConfession(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching confessions:", err);
        setLoading(false);
      }
    };
    fetchConfessions();
  }, []);

  if (loading) {
    return (
      <main>
        <Navbar />
        <div className="px-40 flex flex-1 justify-center py-5">
          <p>Loading Whispers...</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <div className="px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-[#181111] text-[32px] font-bold leading-tight">
                Community Confessions
              </p>
              <p className="text-[#886364] text-sm font-normal leading-normal">
                Browse through confessions submitted by others.
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 flex-wrap pr-4">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
              <p className="text-[#181111] text-sm font-medium leading-normal">
                All
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
              <p className="text-[#181111] text-sm font-medium leading-normal">
                Popular
              </p>
            </div>
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f4f0f0] pl-4 pr-4">
              <p className="text-[#181111] text-sm font-medium leading-normal">
                Recent
              </p>
            </div>
          </div>

          <div className="p-4">
            {confession.length === 0 ? (
              <p>No confessions at the moment</p>
            ) : (
              confession.map((item, index) => (
                <div
                  key={index}
                  className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px] mb-6"
                  style={{
                    backgroundImage:
                      'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDbIPYuA96g7UxoZ3VK1ff9dQ0xeDmbmmV0uSdB024VOKm-Z-I3bfRQn5Cu1ytx5BPU6FBWaCf-C4NT27sneuBY6eM9DE8UO55f3Pjei5SArQh_RyUvVemDRQG5CtjXMUSuguhe02T-f5_m1cA5Tzd9dhqO57Up8cdCuFkiN22ZtV58eqU3lkw0i_QZPpvzJ8FjftGElfWSu54waDJ4r5sCE7uX9V0ONZ3vXjnvHNBtLoOqMuEWR7udwcRc_f9OAiWrXGIWgcG7Nnw")',
                  }}
                >
                  <div className="flex w-full items-end justify-between gap-4 p-4">
                    <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                      <p className="text-white text-2xl font-bold leading-tight">
                        {item.text}
                      </p>
                      <p className="text-white text-base font-medium leading-normal">
                      Submitted by: {item.user.name || "Anonymous"}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  );
};

export default Confessions;
