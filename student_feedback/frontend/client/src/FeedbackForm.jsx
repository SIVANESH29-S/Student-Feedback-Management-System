import { useState } from "react";

function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    rating: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://127.0.0.1:8000/api/feedback/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Feedback submitted successfully");

    setForm({
      name: "",
      email: "",
      rating: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Feedback</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="rating"
        placeholder="Rating (1–5)"
        value={form.rating}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Feedback"
        value={form.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackForm;
