"use client"

// Importing modules
import { useEffect, useState } from 'react';

const HelloComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return <div>{message}</div>;
};

export default HelloComponent;