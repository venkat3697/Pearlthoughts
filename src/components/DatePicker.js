// components/DatePicker.js
import React from "react";
import { useDateStore } from "../Store";
import RecurrenceSelector from "./RecurrenceSelector";
import CalendarPreview from "./CalendarPreview";
import { TextField, Box, Typography } from "@mui/material";

const DatePicker = () => {
  const { startDate, endDate, setStartDate, setEndDate } = useDateStore();

  const handleDateChange = (e, type) => {
    if (type === "start") {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
        maxWidth: 400,
      }}
    >
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          Select Dates
        </Typography>

        <TextField
          label="Start Date"
          type="date"
          fullWidth
          value={startDate || ""}
          onChange={(e) => handleDateChange(e, "start")}
          InputLabelProps={{ shrink: true }}
          sx={{ mb: 2 }}
        />

        <TextField
          label="End Date (Optional)"
          type="date"
          fullWidth
          value={endDate || ""}
          onChange={(e) => handleDateChange(e, "end")}
          InputLabelProps={{ shrink: true }}
        />
      </Box>

      <RecurrenceSelector />

      <CalendarPreview />
    </Box>
  );
};

export default DatePicker;
