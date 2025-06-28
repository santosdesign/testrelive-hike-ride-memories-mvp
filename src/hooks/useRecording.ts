import { useState, useEffect } from 'react';

export const useRecording = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const startRecording = () => {
    try {
      setIsRecording(true);
      // Implement recording logic
    } catch (err) {
      setError('Failed to start recording');
    }
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Implement stop logic
  };

  useEffect(() => {
    if (error) {
      // Handle error, e.g., show a toast
    }
  }, [error]);

  return { isRecording, startRecording, stopRecording, error };
};
