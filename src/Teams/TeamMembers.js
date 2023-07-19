import React, { useState } from "react";
import "./TeamMembers.css"; // Import the CSS file for styling

const TeamMembers = () => {
  const [name, setName] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      setTeamMembers([...teamMembers, name.trim()]);
      setName("");
    }
  };

  return (
    <div className="outer">
      <div className="team-members-container">
        <h2>Team Members</h2>
        <form className="member-form" onSubmit={handleAddMember}>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter member name"
            required
          />

          <button type="submit">Add Member</button>
        </form>
        <ul className="member-list">
          {teamMembers.map((member, index) => (
            <li key={index}>
              <span>{member}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeamMembers;
