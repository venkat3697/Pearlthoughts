import React, { useState, useEffect } from "react";
import { useDateStore } from "../Store";
import { Box, Typography, Select, MenuItem, TextField } from "@mui/material";

const recurrenceTypes = ["none", "daily", "weekly", "monthly", "yearly"];

const RecurrenceSelector = () => {
  const { recurrenceType, setRecurrenceType, setRecurrenceOptions } =
    useDateStore();
  const [customOptions, setCustomOptions] = useState({ interval: 1 });

  useEffect(() => {
    // Update the recurrence options whenever customOptions changes
    setRecurrenceOptions(customOptions);
  }, [customOptions, setRecurrenceOptions]);

  const handleRecurrenceChange = (e) => {
    setRecurrenceType(e.target.value);
  };

  const handleCustomOptionChange = (e) => {
    const { name, value } = e.target;
    setCustomOptions((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box mb={3}>
      <Typography variant="body1" gutterBottom>
        Recurrence
      </Typography>

      <Select
        fullWidth
        value={recurrenceType}
        onChange={handleRecurrenceChange}
        sx={{ mb: 2 }}
      >
        {recurrenceTypes.map((type) => (
          <MenuItem key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </MenuItem>
        ))}
      </Select>

      {recurrenceType !== "none" && (
        <TextField
          label={`Recurrence Interval (every X ${recurrenceType}s)`}
          type="number"
          name="interval"
          value={customOptions.interval}
          fullWidth
          onChange={handleCustomOptionChange}
        />
      )}
    </Box>
  );
};

export default RecurrenceSelector;
