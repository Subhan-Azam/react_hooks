"use client";
import axios from "axios";

export default function Todo() {
  async function get_post() {
    let schoolData = {
      classes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      students: 345,
      teachers: ["subhan", "umar", "umair", "khadija"],
    };

    let searchPath = new URLSearchParams(schoolData);
    await axios.get(`http://localhost:3000/api/todos?${searchPath}`);
  }

  return (
    <div>
      <button onClick={get_post}>Get api post</button>
    </div>
  );
}
