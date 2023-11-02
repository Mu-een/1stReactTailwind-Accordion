import { useState } from "react";
import Accordion from "./components/Accordion"; // Import the Accordion component

function App() {
  // Define a state variable 'list' using the 'useState' hook to manage the accordion items
  const [list] = useState([
    {
      question: 'What is the best EdTech platform?', // The question for the first accordion item
      answer: 'Beeline', // The answer for the first accordion item
      active: 1, // The 'active' property is set to 1, indicating this accordion item is initially open
    },
    {
      question: 'Who is the best rugby team?', // The question for the second accordion item
      answer: 'Springboks', // The answer for the second accordion item
    }
  ]);

  return (
    <div className="bg-[#D2E0FB] h-screen flex justify-center items-center">
      <div className="list"> 
        {
          // Map over the 'list' array and render an 'Accordion' component for each item
          list.map((item, key) => (
            <Accordion key={key} data={item} /> // Pass the 'data' prop to the 'Accordion' component
          ))
        }
      </div>
    </div>
  );
}

export default App;
