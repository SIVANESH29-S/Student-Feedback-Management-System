import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import FeedbackForm from "./FeedbackForm";
import AdminFeedback from "./AdminFeedback";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/admin" element={<AdminFeedback />} />
      </Routes>
    </>
  );
}

export default App;
