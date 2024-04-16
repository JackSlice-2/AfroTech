"use client";

import Webapps from "./Webapps";

const App: React.FC = (props) => {
  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full"
        style={{
background: 'linear-gradient(160deg, #080018 15%, #2A0159 100%, #3C037F)',
          WebkitOverflowScrolling: 'touch', // For smooth scrolling on iOS
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For Internet Explorer
          overflow: '-webkit-paged-x',
        }}>
        {/* For webkit-based browsers (Chrome and Safari) */}
        <style>
          {`::-webkit-scrollbar {
              width: 0px;
              height: 0px;
            }
          `}
        </style>
        <Webapps />
      </div>
    </>
  );
};

export default App;
