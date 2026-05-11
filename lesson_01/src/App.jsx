import React from "react";
import Profile from "./components/Profile/Profile";

export default function App() {
  const count = 0;
  const isTrue = false;
  const first = "first";
  const second = "second";
  const animals = [`cat`, `dog`, `lion`];

  return (
    <>
      <div>{count}</div>
      <div>{isTrue ? first : second}</div>
      ---
      <div>1. {isTrue && first}</div>
      <div>2. {count && first}</div>
      <div>3. {count ?? first}</div>
      <div>4. {count ? first : undefined}</div>
      <div>5. {count ? first : null}</div>
      <div>6. {Boolean(count) && first}</div>
      ---
      <ul>
        {animals.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      ---
      <Profile
        name={"Katya"}
        role={"Lector"}
        avatarUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX4q0-hFsRa8s1kzziYZVHIW1zg-yH0S2POA&s"
        }
        skills={["React", "Java", "Designe"]}
        isOnline={true}
      />
    </>
  );
}
