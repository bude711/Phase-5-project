import React, { useState } from "react";
import { useParams } from "react-router-dom"

function ReviewForm({ onAddReview, user}) {
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

        fetch(`http://localhost:4000/api/reviews`, {
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
                    comment: "",
                    rating:"",
                })
                onAddReview(newReview)
                window.location.reload(false)
                
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
                    min="1" 
                    max="5"
                    onChange={handleChange}
                    value={reviewFormData.rating}
                    placeholder="0"
                    className="input-text"
                />

                <button  type="submit"> Submit </button>
               
                   </form>
        </div>
    )
}

export default ReviewForm;

