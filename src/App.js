import "./styles.css";
import DatePicker from "./components/DatePicker";
import { Container, Box } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box mt={5} display="flex" justifyContent="center" alignItems="center">
        <DatePicker />
      </Box>
    </Container>
  );
}
