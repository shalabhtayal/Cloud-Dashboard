import React, { useState } from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SpeedIcon from '@mui/icons-material/Speed';

import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import RealTimeNotifications from "../../components/RealTimeNotifications";
import RandomMetricsGenerator from "../../components/RandomMetricsGenerator";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [metrics, setMetrics] = useState({
    cpuUsage: 0,
    RAMusage: 0,
    storage: 0,
    network: 0
  });

  const handleMetricsUpdate = (newMetrics) => {
    setMetrics(newMetrics);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Cloud Dashboard" />

        {/* REAL-TIME NOTIFICATIONS */}
        <RealTimeNotifications />

        <RandomMetricsGenerator onMetricsUpdate={handleMetricsUpdate} />

{/*        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>*/}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="minmax(140px, auto)"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 6', md: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={metrics.RAMusage + " GiB"}
            subtitle="RAM"
            icon={
              <DeveloperBoardIcon
                sx={{ color: colors.greenAccent[600], fontSize: "48px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 6', md: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={metrics.network + " Mbps"}
            subtitle="Network Speed"
            icon={
              <SpeedIcon
                sx={{ color: colors.greenAccent[600], fontSize: "48px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 6', md: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={metrics.storage + " %"}
            subtitle="Server Storage"
            icon={
              <StorageIcon
                sx={{ color: colors.greenAccent[600], fontSize: "48px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 6', md: 'span 3' }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={metrics.cpuUsage + "%"}
            subtitle="Processor"
            icon={
              <MemoryIcon
                sx={{ color: colors.greenAccent[600], fontSize: "48px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 12', md: 'span 8' }}
          gridRow={{ xs: 'span 4', sm: 'span 2' }}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 12', md: 'span 4' }}
          gridRow={{ xs: 'span 4', sm: 'span 2' }}
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}

        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 12', md: 'span 6' }}
          gridRow={{ xs: 'span 4', sm: 'span 2' }}
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: 'span 12', sm: 'span 12', md: 'span 6' }}
          gridRow={{ xs: 'span 4', sm: 'span 2' }}
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
