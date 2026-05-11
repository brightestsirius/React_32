import React from "react";
import Avatar from "../Avatar/Avatar";

export default function Profile({ name, role, avatarUrl, skills, isOnline }) {
  return (
    <ul>
      <li>Name: {name}</li>
      <li>Role: {role}</li>
      {avatarUrl ? (
        <li>
          <Avatar name={name} avatarUrl={avatarUrl} />
        </li>
      ) : null}
      <li>
        {skills.length ? (
          <ul>
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No skills</p>
        )}
      </li>
      <li>isOnline: {String(isOnline)}</li>
    </ul>
  );
}
