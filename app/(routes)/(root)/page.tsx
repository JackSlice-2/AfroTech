"use client";

import Root from "./components/Root";

const App: React.FC = (props) => {
  return (
    <>
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full"
        style={{
          backgroundImage: "url('./img/bg.jpeg')",
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
        <Root />
      </div>
    </>
  );
};

export default App;
