import React from "react";

export default function Rating({ rating }) {
  let ratingIndex = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingIndex[i] = true;
  }

  return (
    <>
      {ratingIndex.map((value, index) => {
        return value ? (
          <i
            key={index}
            className="text-lg bi bi-star-fill text-yellow-500 mr-1"
          ></i>
        ) : (
          <i
            key={index}
            className="text-lg bi bi-star text-yellow-500 mr-1"
          ></i>
        );
      })}
    </>
  );
}
