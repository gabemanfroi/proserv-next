import React from "react";

export default function ServiceContainer({ title, description, icon }) {
  const IconComponent = icon;
  return (
    <div className="bg-white text-black text-center flex flex-col gap-4 p-16 relative">
      <div
        style={{
          height: "72px",
          width: "72px",
          top: "-36px",
          left: "calc(50% - 32px)",
          borderRadius: "50%",
          border: "6px solid #fff",
          background: "#3261ca",
        }}
        className="absolute bg-green-300 flex justify-center items-center"
      >
        <IconComponent size={32} color="white" />
      </div>
      <h4 className="text-xl uppercase font-bold">{title}</h4>
      <p className="font-normal text-sm" style={{ color: "#666" }}>
        {description}
      </p>
    </div>
  );
}
