import React from "react";

export default function Avatar({ name, avatarUrl }) {
  return (
    <img
      src={avatarUrl}
      alt={name}
      width={"80"}
      height={"80"}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
}
