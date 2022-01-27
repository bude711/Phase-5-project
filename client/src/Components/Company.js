import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function Company({user, onDeleteReview}) {

  const { id } = useParams();
  const [{ data: company, error, status }, setCompany] = useState({
    data: null,
    error: null,
    status: "pending",
  });

 


  useEffect(() => {
    fetch(`/api/companies/${id}`).then((r) => {
      if (r.ok) {
        r.json().then((company) =>
          setCompany({ data: company, error: null, status: "resolved" })
        );
      } else {
        r.json().then((err) =>
          setCompany({ data: null, error: err.error, status: "rejected" })
        );
      }
    });
  }, [id]);

  

  function handleAddReview(newReview) {
    setCompany({
      data: {
        ...company,
        reviews: [...company.reviews, newReview],
      },
      error: null,
      status: "resolved",
    });
  }






  function handleDeleteClick(reviewId) {
    fetch(`/api/reviews/${reviewId}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(id)
        window.location.reload(false)
      }
    })
  }


  if (status === "pending") return <h1>Loading...</h1>;
  if (status === "rejected") return <h1>Error: {error.error}</h1>;

  return (
    <div>
      {company ?
    <div className="companydetailcard">
    
        <div key={company.id} className="company-basic-detail">
              <img className="company-img" src={company.img_url} width="400" height="200" alt={company.name} />
                <div className="company-info">
                    <h1>
                      {company.name} 
                    </h1>
                    <br></br>
                    <p>Headquarters: {company.location}</p> 
                    <p>Website: {company.website} </p> 
                    <p>Staff Size: {company.size} </p>
                    <p>Networth: {company.networth}</p>
                </div>
       </div>

        <div>

              <div>
                <h3 className="edititle">Diversity Statement </h3>
                    <p className="edistatement">{company.edi_statement}</p>
              </div>

              <div >
                <h3 className="demotitle">Demographics</h3>

                      <div className="demographics"> 
                        
                        <div className="bipocinfo">
                            <h4>BIPOC info </h4>
                            <p>{company.bipoc_info}</p>
                        </div>
                        <div className="genderinfo">
                            <h4>Gender info</h4>
                            <p>{company.gender_info}</p>
                        </div>
                        <div className="lgbtinfo">
                           <h4>LGBTQIA+ info</h4>
                            <p>{company.lgbtqia_info}</p>
                        </div>
                        <div className="disabilityinfo">
                        <h4>Disability info</h4>
                            <p>{company.disability_info}</p>
                        </div>
                  
                      </div>

                </div>
      </div>
<br></br>
      <div className="review-card">
            <h2 className="reviews-title">Reviews:</h2>
            
            {company.reviews?.map((review) => (
                  <div className="review" key={review.id}>
                    <em>{review.comment}</em> 
                    &nbsp;
                      <em>{review.rating}/5</em>
                      &nbsp;
                  <button className="delete-button" onClick={() => handleDeleteClick(review.id)}>Delete review</button>
                  </div>
                ))}
      </div>
<br></br>
      <div className="form">
        <h4 className="addareviewtitle">Add A Review</h4>
        <ReviewForm user={user} onAddReview={handleAddReview} />
      </div>

    </div>
: null}
    </div>
  );
}

export default Company;
