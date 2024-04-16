// hooks/useMessages.tsx
import { useState, useEffect } from 'react';
import axios from 'axios';

const useMessages = () => {
 const [messages, setMessages] = useState([]);
 const [error, setError] = useState(null);

 useEffect(() => {
    const fetchMessages = async () => {
      console.log('Fetching messages...'); // Log before making the request
      try {
        const response = await axios.get('/api/messages');
        console.log('Response received:', response); // Log the response
        setMessages(response.data);
      } catch (err: any) {
        console.error('Error fetching messages:', err); // Log the error
        setError(err.message);
      }
    };

    fetchMessages();
 }, []);

 return { messages, error };
};

export default useMessages;
