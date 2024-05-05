import { useState, useEffect } from 'react';
import axios from 'axios';

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      console.log('Fetching messages...');
      try {
        const response = await axios.get('/api/messages');
        console.log('Response received:', response);
        setMessages(response.data);
      } catch (err: any) {
        console.error('Error fetching messages:', err);
        setError(err.message);
      }
    };

    // Call fetchMessages immediately and then set up an interval to call it every 5 seconds
    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000); // 5000 milliseconds = 5 seconds

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  return { messages, error };
};

export default useMessages;
