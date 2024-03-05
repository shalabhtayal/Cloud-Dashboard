import React, { useEffect, useState } from 'react';

const RandomMetricsGenerator = ({ onMetricsUpdate }) => {
  const [cpuUsage, setCpuUsage] = useState(0);
  const [RAMusage, setRamUsage] = useState(0);
  const [storage, setStorage] = useState(0);
  const [network, setNetwork] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random values for CPU usage, RAM usage, storage, and network
      const newCpuUsage = Math.floor(Math.random() * 101); // Random number between 0 and 100
      const newRamUsage = Math.floor(Math.random() * (7.4 - 6.5 + 1)) + 6.5; // Random number between 0 and 100
      const newStorage = Math.floor(Math.random() * (60 - 55 + 1)) + 55; // Random number between 55 and 60
      const newNetwork = Math.floor(Math.random() * (350 - 250 + 1)) + 250; // Random number between 250 and 350

      // Update state with new values
      setCpuUsage(newCpuUsage);
      setRamUsage(newRamUsage);
      setStorage(newStorage);
      setNetwork(newNetwork);

      // Notify parent component with updated metrics
      onMetricsUpdate({ cpuUsage: newCpuUsage, RAMusage: newRamUsage, storage: newStorage, network: newNetwork });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [onMetricsUpdate]);

  return null; // No need to render anything
};

export default RandomMetricsGenerator;
