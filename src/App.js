import NewsList from "./components/NewsList";
import Navbar from "./components/Navbar";
import "./components/NewsList";
import { useState } from "react";

function App() {
  const [searchData, setSearchData] = useState("");

  return (
    <>
      <Navbar setSearchData={setSearchData} />
      <div className="head">
        <NewsList searchData={searchData} />
      </div>
    </>
  );
}

export default App;
// <a href="#" onClick={handleClick}>
//       outer link
//       <div>
//         <a href="#" onClick={handleInnerClick}>
//           Inner Link
//         </a>
//       </div>
//     </a>
// const handleClick = (event) => {
//   event.preventDefault(); // prevent the default behavior of the event
//   // handle the click event for the outer <a> tag here
//   console.log("event outside", event);
// };

// const handleInnerClick = (event) => {
//   event.stopPropagation();
//   console.log("event inside", event);
//   // handle the click event for the inner <a> tag here
// };
