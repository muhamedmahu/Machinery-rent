import React from "react";
import "./EquipmentList.css";

const equipmentData = [
  {
    id: 1,
    name: "Экскаватор",
    image: "/images/excavator.jpg",
    description: "Мощный экскаватор для земляных работ.",
  },
  {
    id: 2,
    name: "Кран",
    image: "/images/crane.jpg",
    description: "Кран для тяжелых грузов.",
  },
];

const EquipmentList = () => {
  return (
    <div className="equipment-container">
      {equipmentData.map((item) => (
        <div key={item.id} className="equipment-card">
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.name} className="equipment-image" />
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
