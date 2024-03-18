import React from "react";
import "./styles.scss"
const filterData= ["All","Flat","Terraced House","Semi detachted"]

const FilterCard = ({handlePropertyTypeClick,selectedType}) => {
  return (
    <div className="card">
      <ul >
        {filterData.map((item,index)=>(
        <li key={index} onClick={()=>handlePropertyTypeClick(item)} className={`${selectedType === item && "bold"}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCard;
