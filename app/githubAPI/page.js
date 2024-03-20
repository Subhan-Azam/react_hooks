"use client";
import axios from "axios";
import React, { useState } from "react";
export default function GithubAPI() {
  const [userName, setUserName] = useState("");
  const [data, setData] = useState(null);
  const [userFollowers, setUserFollowers] = useState([]);

  const fetchData = async () => {
    try {
      setUserFollowers([]);
      let res = await fetch(`https://api.github.com/users/${userName}`);
      res = await res.json();
      setData(res);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const onFollowerHandler = async () => {
    try {
      let res = await axios.get(
        `https://api.github.com/users/${userName}/followers`
      );
      setUserFollowers(res.data);
      console.log("user followers", res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Github API</h1>
      <label>User Name:</label>
      <input
        onChange={(e) => setUserName(e.target.value)}
        style={{ border: "1px solid black" }}
        type="text"
      />
      <button
        style={{ border: "2px solid black", borderRadius: "8px" }}
        onClick={fetchData}
      >
        Search
      </button>

      {data && (
        <>
          <h1>Github user</h1>
          <img src={data.avatar_url} width={100} alt="" />
          <span>
            bio: {data.bio} - {data.followers}
          </span>

          <button
            style={{ border: "2px solid black", borderRadius: "8px" }}
            onClick={onFollowerHandler}
          >
            Get Followers
          </button>
        </>
      )}

      {userFollowers >= 1 && (
        <table>
          <th>ID</th>
          <th>Avatar</th>
          <th>Name</th>
          <th>Follower</th>

          {userFollowers?.map((element) => {
            return (
              <tr>
                <td>{element.id}</td>
                <td>
                  <img src={element.avatar_url} width={80} alt="" />
                </td>
              </tr>
            );
          })}
        </table>
      )}
    </>
  );
}
