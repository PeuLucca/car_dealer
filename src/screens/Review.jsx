import React, { useState, useEffect } from "react";
import "../App.css";
import { getReviews } from "../backend/api";

const Review = () => {
  const [reviews, setReview] = useState([]);

  const renderStars = (rating) => {
    const filledStars = Array(rating).fill(0).map((_, index) => (
      <span key={index}>&#9733;</span>
    ));
  
    const emptyStars = Array(5 - rating).fill(0).map((_, index) => (
      <span key={rating + index}>&#9734;</span>
    ));
  
    return [...filledStars, ...emptyStars];
  };

  useEffect(() => {
    async function fetchReviews() {
      const reviewData = await getReviews();
      setReview(reviewData);
    }

    fetchReviews()
  }, [])

  return (
    <div id="reviews">
      <h2 style={{ marginLeft: "3%", color: "rgb(54, 52, 52)" }}>Customer Reviews</h2>
      <div className="review-cards-container">
      {
        reviews.map((review) => (
          <div className="review-card" key={review.purchase_id}>
            <img  
              src={review.path}
              alt={review.brand}
            />

            <div className="review-content">
              <h3>{review.brand} {review.model}</h3>
              <p>{review.review_text}</p>
              <div className="reviewer-info">
                <div className="user-info">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    alt="Reviewer Avatar"
                  />
                  <div className="reviewer-details">
                    <p>{review.username}</p>
                  </div>
                </div>
                <div className="rating">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default Review;
