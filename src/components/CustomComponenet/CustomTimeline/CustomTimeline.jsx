import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CustomTimeline = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        minHeight: "500px",
        maxHeight: "550px",
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? colors.whiteSmoke[100]
            : colors.oxfordBlue[300],
        borderRadius: 2,
        p: 1,
      }}
    >
      <Box
        component={"div"}
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Recent Activities</Typography>
        <IconButton sx={{ m: 1 }} edge="end" aria-label="delete">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          overflowY: "auto",
          maxHeight: "410px",
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "2px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: theme.palette.primary.dark,
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Timeline
          sx={{
            "& .MuiTimelineItem-root": {
              minHeight: "180px",
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent sx={{ textAlign: "left" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5">Your account is logged in</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: "12px", mr: 0.5 }} /> 15 min
                  ago
                </Typography>
              </Box>
              <Typography color="text.secondary" variant="body1" sx={{ mb: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nisi minima reprehenderit corporis odit tempore.nisi minima
                reprehenderit corporis odit tempore.
              </Typography>
              <Button variant="outlined" color="primary">
                Action
              </Button>
            </TimelineOppositeContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent sx={{ textAlign: "left" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5">New product is listed</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: "12px", mr: 0.5 }} /> 15 min
                  ago
                </Typography>
              </Box>
              <Typography color="text.secondary" variant="body1" sx={{ mb: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nisi minima reprehenderit corporis odit tempore.nisi minima
                reprehenderit corporis odit tempore.
              </Typography>
              <Button variant="contained" color="secondary">
                Some Action
              </Button>
            </TimelineOppositeContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent sx={{ textAlign: "left" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5">Your account is logged in</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: "12px", mr: 0.5 }} /> 15 min
                  ago
                </Typography>
              </Box>
              <Typography color="text.secondary" variant="body1" sx={{ mb: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nisi minima reprehenderit corporis odit tempore.nisi minima
                reprehenderit corporis odit tempore.
              </Typography>
              <Button variant="outlined" color="primary">
                Action
              </Button>
            </TimelineOppositeContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineOppositeContent sx={{ textAlign: "left" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="h5">New product is listed</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon sx={{ fontSize: "12px", mr: 0.5 }} /> 15 min
                  ago
                </Typography>
              </Box>
              <Typography color="text.secondary" variant="body1" sx={{ mb: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                nisi minima reprehenderit corporis odit tempore.nisi minima
                reprehenderit corporis odit tempore.
              </Typography>
              <Button variant="contained" color="secondary">
                Some Action
              </Button>
            </TimelineOppositeContent>
          </TimelineItem>
        </Timeline>
      </Box>
    </Box>
  );
};

export default CustomTimeline;
