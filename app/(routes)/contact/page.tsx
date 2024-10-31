"use client";

import { ContactText } from "@/app/data/textData/MainText";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import PageContainer from "@/app/components/Elements/PageContainer";

const App: React.FC = () => {
  return (
      <PageContainer>
          <div className="bg-blue-400/20 w-[95%] rounded-3xl px-5 mx-10 md:px-20 text-center">
            <h2 className='text-4xl text-medium p-4 py-5'>
              {ContactText.title}
            </h2>
            <p className='text-lg py-3 pb-6'>
              {ContactText.subtitle}
            </p>
          </div>
        <div className="w-full flex justify-center m-5 flex-col lg:flex-row xl:flex-row">
        <ContactList />
          <div className="text-center justify-center align-center md:px-10 px-5 pt-4 w-full">
            <ContactForm />
          </div>
        </div>
      </PageContainer>
  );
}

export default App;
