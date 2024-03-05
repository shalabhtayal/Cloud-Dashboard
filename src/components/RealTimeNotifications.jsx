import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const RealTimeNotifications = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("success");

  const generateNotification = () => {
    const scenarios = [
      { message: "Server overloaded", severity: "error" },
      { message: "Database backup complete", severity: "success" },
      { message: "Network connectivity issue", severity: "error" },
      { message: "Payment received", severity: "success" },
      { message: "New user registered", severity: "info" },
      { message: "Service update available", severity: "info" },
      { message: "High CPU usage detected", severity: "warning" },
      { message: "Memory usage exceeded threshold", severity: "warning" },
      { message: "Disk space running low", severity: "warning" },
      { message: "Database connection lost", severity: "error" },
      { message: "Unauthorized access attempt detected", severity: "error" },
      { message: "SSL certificate expired", severity: "error" },
    ];

    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];
    setMessage(randomScenario.message);
    setSeverity(randomScenario.severity);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      generateNotification();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
};

export default RealTimeNotifications;
