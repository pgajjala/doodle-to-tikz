'use client'; 

import { useState } from 'react';
import Canvas from '../components/Canvas';

export default function Home() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/test');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to fetch message from backend.');
      console.error(error);
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>TikZoodle</h1>
      <p>Draw on the canvas below:</p>
      <Canvas />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={fetchMessage}>Test Backend Connection</button>
        {message && <p style={{ marginTop: '1rem' }}><strong>Response from backend:</strong> {message}</p>}
      </div>
    </main>
  );
}