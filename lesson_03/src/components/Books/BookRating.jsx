import React from "react";

export default function BookRating({ book: { rating }, children }) {
  return (
    <>
      <span>🌟 {rating}</span> {children}
    </>
  );
}
