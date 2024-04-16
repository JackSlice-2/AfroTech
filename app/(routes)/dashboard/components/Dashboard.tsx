import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import useMessages from '../../../hooks/useMessages';

interface Message {
 name: string;
 phone: string;
 email: string;
 option: string;
 message: string;
 createdAt: string;
}

const Dashboard = () => {
 const { messages: untypedMessages, error } = useMessages();
 const messages = untypedMessages as Message[];

 const [sortField, setSortField] = useState('date'); // Default sort field

 if (error) {
    return <div className="text-red-500">Error: {error}</div>;
 }

 function formatDate(dateString: string) {
 const date = new Date(dateString);
 return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
 }

 // Sort function
 const sortedMessages = messages.sort((a, b) => {
   switch (sortField) {
     case 'name':
       return a.name.localeCompare(b.name);
     case 'date':
       return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
     case 'option':
       return a.option.localeCompare(b.option);
     default:
       return 0;
   }
 });

 return (
    <div className="flex flex-col justify-center items-center px-2">
      <Navbar />
      <div className="h-full w-3/4">
        <h1 className="text-2xl font-bold mb-4 text-center justify-center">Messages:</h1>
        <div>
          <button onClick={() => setSortField('name')}>Sort by Name</button>
          <button onClick={() => setSortField('date')}>Sort by Date</button>
          <button onClick={() => setSortField('option')}>Sort by Option</button>
        </div>
        <div className="space-y-4">
          {sortedMessages.map((message, index) => (
            <div key={index} className="bg-blue-900/30 shadow-md rounded-2xl p-4 hover:bg-blue-800/40">
              <p className="font-medium text-3xl">Name: {message.name}</p>
              <p className="font-medium">Phone: {message.phone}</p>
              <p className="font-medium">Email: {message.email}</p>
              <p className="font-medium">Option: {message.option}</p>
              <p className="font-medium">Message: {message.message}</p>
              <p className="text-sm text-neutral-100/30">{formatDate(message.createdAt)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
 );
};

export default Dashboard;
