import React from "react";
import { Link } from "react-router-dom";
function PlanPage() {
  return (
    <div className="p-4 pb-32">
      <h1 className="pt-20 pb-16 text-4xl font-bold text-center text-accent-green">
        Choose a Plan
      </h1>
      <div className="flex flex-wrap gap-[6em] justify-center items-center">
        <PlanCard
          planType={"Individual"}
          planPrice={30}
          planlink={"form"}
          planText={
            "Unlock your potential with our individual plan! Learn, excel, and master Data Structures and Algorithms at your own pace. Whether you're preparing for interviews, honing your competitive programming skills, or just advancing your career, this plan is tailored to help you succeed."
          }
        />
        <PlanCard
          planType={"Institution"}
          planPrice={25}
          planlink={"form"}
          planText={
            "Empower your institution with our exclusive plan designed for groups of 10 or more. Boost your organization's reputation by fostering a culture of learning and excellence in Data Structures, Algorithms, and competitive programming. Equip your team with the skills they need to excel and shine!"
          }
        />
      </div>
    </div>
  );
}

function PlanCard({ planType, planPrice, planlink, planText }) {
  return (
    <section className="max-w-[400px] bg-white w-fit px-5 py-4 rounded-xl shadow-lg flex flex-col justify-center gap-4 pb-8">
      <p className="text-accent-green font-bold text-left">{planType}</p>
      <div className="flex justify-start gap-2 items-center">
        <span className="text-accent-green font-bold text-[2.5rem]">
          ${planPrice}
        </span>{" "}
        <span className="text-sm mt-[0.6em]">/person</span>
      </div>
      <div>
        <p>{planText}</p>
        <Link to={planlink}>
          <button className="mt-6 bg-accent-green hover:opacity-[0.9] transition-all   text-white font-bold text-center rounded-md w-full py-2 text">
            Register
          </button>
        </Link>
      </div>
    </section>
  );
}

export default PlanPage;
