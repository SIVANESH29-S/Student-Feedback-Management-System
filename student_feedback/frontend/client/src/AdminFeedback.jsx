import { useEffect, useState } from "react";

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/feedback/")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  return (
    <div>
      <h2>Admin – Feedback List</h2>

      <table border="1" width="100%" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Rating</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
  {feedbacks.map((fb) => (
    <tr key={fb.id}>
      <td data-label="Name">{fb.name}</td>
      <td data-label="Email">{fb.email}</td>
      <td data-label="Rating">{fb.rating}</td>
      <td data-label="Message">{fb.message}</td>
      <td data-label="Date">{fb.created_at}</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
}

export default AdminFeedback;
