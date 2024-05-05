"use client";

import { ToastContainer } from "react-toastify";
import Navbar from "@/app/components/Navbar";
import { ContactText } from "@/app/data/textData/MainText";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

const App: React.FC = (props) => {
  return (
      <div
        className="h-screen overflow-y-auto overflow-x-hidden
       text-gray-300 w-max-full "
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
        <section className="flex flex-col justify-center items-center lg:px-40 xl:px-40">
        <ToastContainer />
        <Navbar />
        <div className="relative flex justify-center items-center flex-col lg:px-20 xl:px-20">
        <div className="bg-blue-400/20 w-full rounded-3xl mx-10 px-20 text-center">
            <h2 className='text-4xl text-medium p-4 py-5'>
              {ContactText.title}
              </h2>
            <p className='text-lg py-3 pb-6'>
            {ContactText.subtitle}
              </p>
        </div>
        <div className="w-full flex justify-center m-5 flex-col lg:flex-row xl:flex-row">
        <ContactList />
          <div className="text-center justify-center align-center px-10 pt-4 w-full">
            <ContactForm />
          </div>
        </div>
        </div>
</section>    </div>
  );
}

export default App;
