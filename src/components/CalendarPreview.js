import React from "react";
import { useDateStore } from "../Store";
import { Box, Typography, Grid } from "@mui/material";

const CalendarPreview = () => {
  const { startDate, endDate, recurrenceType, recurrenceOptions } =
    useDateStore();

  const generateDates = () => {
    const dates = [];

    if (!startDate) return dates; // No start date, return empty array

    const start = new Date(startDate);
    let end = endDate ? new Date(endDate) : null;

    // If end date is not provided, set it to one year from the start date
    if (!end) {
      end = new Date(start);
      end.setFullYear(start.getFullYear() + 1);
    }

    const interval = Number(recurrenceOptions.interval || 1); // Fallback to 1 if no interval provided

    // Validate interval to prevent infinite loops
    if (interval <= 0) {
      console.warn("Interval must be greater than 0");
      return [];
    }

    let currentDate = new Date(start);

    if (recurrenceType === "daily") {
      // Daily recurrence
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + interval); // Add interval days
      }
    } else if (recurrenceType === "weekly") {
      // Weekly recurrence
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setDate(currentDate.getDate() + 7 * interval); // Add 7 * interval days for weekly recurrence
      }
    } else if (recurrenceType === "monthly") {
      // Monthly recurrence
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setMonth(currentDate.getMonth() + interval); // Add interval months
      }
    } else if (recurrenceType === "yearly") {
      // Yearly recurrence
      while (currentDate <= end) {
        dates.push(currentDate.toISOString().split("T")[0]);
        currentDate.setFullYear(currentDate.getFullYear() + interval); // Add interval years
      }
    }

    return dates;
  };

  const dates = generateDates();

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Recurring Dates Preview:
      </Typography>

      {dates.length > 0 ? (
        <Grid container spacing={2}>
          {dates.map((date, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Typography variant="body2" align="center">
                {date}
              </Typography>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body2">No recurring dates available</Typography>
      )}
    </Box>
  );
};

export default CalendarPreview;
