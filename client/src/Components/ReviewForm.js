// import { useEffect, useState } from "react";

// function ReviewForm({ companyId, onAddReview }) {
//   const [reviews, setReviews] = useState([]);
//   const [reviewId, setReviewId] = useState("");
//   const [rating, setRating] = useState("");
//   const [formErrors, setFormErrors] = useState([]);

//   useEffect(() => {
//     fetch("/reviews")
//       .then((r) => r.json())
//       .then(setReviews);
//   }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     const formData = {
//       company_id: companyId,
//       review_id: reviewId,
//       rating: parseInt(rating),
//     };
//     fetch("/appearances", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((appearance) => {
//           onAddGuest(appearance.guest);
//           setFormErrors([]);
//         });
//       } else {
//         r.json().then((err) => setFormErrors(err.errors));
//       }
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="guest_id">Guest:</label>
//       <select
//         id="guest_id"
//         name="guest_id"
//         value={guestId}
//         onChange={(e) => setGuestId(e.target.value)}
//       >
//         <option value="">Select a Guest</option>
//         {guests.map((guest) => (
//           <option key={guest.id} value={guest.id}>
//             {guest.name}
//           </option>
//         ))}
//       </select>
//       <label htmlFor="rating">Rating:</label>
//       <input
//         id="rating"
//         name="rating"
//         type="number"
//         value={rating}
//         onChange={(e) => setRating(e.target.value)}
//       />
//       {formErrors.length > 0
//         ? formErrors.map((err) => (
//             <p key={err} style={{ color: "red" }}>
//               {err}
//             </p>
//           ))
//         : null}
//       <button type="submit">Add To Episode</button>
//     </form>
//   );
// }

// export default GuestForm;

import React, { useState } from "react";
import { useParams } from "react-router-dom"

function ReviewForm({ onAddReview, user, companyId }) {
    const { id } = useParams()
    
    const [reviewFormData, setReviewFormData] = useState({
        comment: "",
        rating: "",
        user_id: user.id,
        company_id: id
    })

    function handleChange(e) {
        setReviewFormData({
            ...reviewFormData, 
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newReview = {
            ...reviewFormData}

        fetch(`/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
        })
            .then((r) => r.json())
            .then((r) => {
                setReviewFormData({
                    id: "",
                    comemnt: "",
                    rating:"",
                })
                onAddReview(newReview)
                
            })
    }

    return (

        <div className="container">
            <form onSubmit={handleSubmit} className="add-review-form">
                <input 
                    type="text"
                    name="comment"
                    onChange={handleChange}
                    value={reviewFormData.comment}
                    placeholder="Add Comment here..."
                    className="input-text"
                />

                <input 
                    type="number"
                    name="rating"
                    onChange={handleChange}
                    value={reviewFormData.rating}
                    placeholder="Add rating here..."
                    className="input-text"
                />
                    <input 
                    type="submit"
                    name="submit"
                    value="Submit"
                    className="submit"
                />
               
                   </form>
        </div>
    )
}

export default ReviewForm;

