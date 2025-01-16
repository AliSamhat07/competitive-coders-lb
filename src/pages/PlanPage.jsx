import React from "react";

function PlanPage() {
  return (
    <div className="p-4 pb-32">
      <h1 className="pt-20 pb-16 text-4xl font-bold text-center text-accent-green">
        Choose a Plan
      </h1>
      <div className="flex flex-wrap gap-[6em] justify-center items-center">
        <PlanCard planType={"Individual"} planPrice={20} />
        <PlanCard planType={"Institution"} planPrice={10} />
      </div>
    </div>
  );
}

function PlanCard({ planType, planPrice }) {
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic
          tempora. Natus laboriosam tempora consequatur ipsam ullam! Eum,
          tenetur cum voluptatibus perspiciatis molestiae recusandae velit porro
          praesentium corporis, delectus nesciunt veritatis laborum cupiditate
          quas ducimus.
        </p>
        <button className="mt-6 bg-accent-green hover:opacity-[0.9] transition-all   text-white font-bold text-center rounded-md w-full py-2 text">
          Register
        </button>
      </div>
    </section>
  );
}

export default PlanPage;
