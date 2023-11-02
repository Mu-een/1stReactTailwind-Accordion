import React, { useState } from "react";

const Accordion = (props) => {
  // Initialize the 'item' state using 'useState' with data from props and an 'active' property set to 0
  const [item, setItem] = useState({ ...props.data, active: 0 });

  // Function to toggle the 'active' property of the 'item' state
  const handletoggleActive = () => {
    // Check if the current 'active' state is 1 (accordion is open), if so, set 'newActive' to 0 (closing the accordion)
    // If 'active' is not 1 (accordion is closed), set 'newActive' to 1 (opening the accordion)
    let newActive = item.active === 1 ? 0 : 1;

    // Update the 'item' state with the new 'active' value, effectively opening or closing the accordion
    setItem({ ...item, active: newActive });
  };

  return (
    <div className={`bg-[#e9e9e9] p-5 border mb-5 border-[#c9c6c655] rounded-md w-[500px] duration-500 group ${item.active === 1 ? 'is-active bg-white' : ''}`}>
      <div className="flex items-center">
        {/* Apply 'font-bold' class conditionally based on the 'active' state */}
        <div className={`w-full duration-500 ${item.active === 1 ? 'font-bold' : ''}`}>
          {item.question} {/* Display the question */}
        </div>
        <div className={`text-xl rotate-90 duration-500 cursor-pointer ${item.active === 1 ? 'rotate-[270deg]' : ''}`} onClick={handletoggleActive}>></div>
        {/* Show or hide the answer based on the 'active' state */}
      </div>
      {item.active === 1 && (
        <div className="overflow-hidden max-h-[100px] duration-500">
          {item.answer} {/* Display the answer if 'active' is 1 */}
        </div>
      )}
    </div>
  );
}

export default Accordion;

