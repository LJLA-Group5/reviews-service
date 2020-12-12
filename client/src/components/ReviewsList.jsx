import styled from 'styled-components';
import React, { useState } from 'react';
import ReviewListEntry from './ReviewListEntry';

const ReviewList = ({ data }) => {
  const [reviews, setReviews] = useState([]);
  const [doneLoading, setDoneLoading] = useState(false);

  if (data.length > 0 && !doneLoading) {
    setDoneLoading(true);
    setReviews(data);
  }

  const ReviewGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `;

  return (
    <ReviewGrid>
      {reviews.slice(0, 6).map((singleReview) => (
        <ReviewListEntry
          avatar={singleReview.photo_url}
          name={singleReview.user_first_name}
          text={singleReview.review_body}
          date={singleReview.created_at}
        />
      ))}
    </ReviewGrid>
  );
};

export default ReviewList;
