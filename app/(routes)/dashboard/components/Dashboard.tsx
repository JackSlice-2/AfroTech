'use client'

import React from 'react';
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

 if (error) {
    return <div className="text-red-500">Error: {error}</div>;
 }

 // Sort messages from newest to oldest
 const sortedMessages = messages.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

 function formatDate(dateString: string) {
 const date = new Date(dateString);
 return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
 }
 
 return (
      <div className="h-full w-3/4">
        <h1 className="text-2xl font-bold mb-4 text-center justify-center">Messages:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedMessages.map((message, index) => (
            <div key={index} className="bg-blue-900/30 shadow-md rounded-2xl p-4 hover:bg-blue-800/40 overflow-auto">
              <p className="font-medium text-3xl">Name: {message.name}</p>
              <p className="font-medium">Phone: {message.phone}</p>
              <p className="font-medium">Email: {message.email}</p>
              <p className="font-medium">Option: {message.option}</p>
              <p className="font-medium" style={{ whiteSpace: 'normal', overflowWrap: 'break-word', wordWrap: 'break-word' }}>Message: {message.message}</p>
              <p className="text-sm text-neutral-100/30">{formatDate(message.createdAt)}</p>
            </div>
          ))}
        </div>
      </div>
 );
};

export default Dashboard;
