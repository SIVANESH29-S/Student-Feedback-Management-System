import { useEffect, useState } from "react";

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/feedback/")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  const totalFeedback = feedbacks.length;

  const avgRating =
    totalFeedback === 0
      ? 0
      : (
          feedbacks.reduce((sum, fb) => sum + Number(fb.rating), 0) /
          totalFeedback
        ).toFixed(1);

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>

      <div className="cards">
        <div className="card">
          <h3>Total Feedback</h3>
          <p>{totalFeedback}</p>
        </div>

        <div className="card">
          <h3>Average Rating</h3>
          <p>{avgRating}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
