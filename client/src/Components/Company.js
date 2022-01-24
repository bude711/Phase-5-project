import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";

function Company({user, onDeleteReview}) {
  const [{ data: company, error, status }, setCompany] = useState({
    data: null,
    error: null,
    status: "pending",
  });

  const { id } = useParams();


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

  function handleDeleteClick(id) {
    fetch(`/api/reviews/${id}`, {
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
    <section className="container">
      <div className="card">
      <img src={company.img_url} width="400" height="200" alt={company.name} />
        <h1>
          {company.name} 
        </h1>
        <p>{company.location} :  {company.website} : {company.size} : Networth: {company.networth}</p>
        <p>EDI Statement: {company.edi_statement}</p>
        <p>BIPOC info: {company.bipoc_info}</p>
        <p>Gender info: {company.gender_info}</p>
        <p>LGBTQIA+ info: {company.lgbtqia_info}</p>
        <p>Disability info: {company.disability_info}</p>
      </div>
      <div className="card">
        <h2>Reviews</h2>
        {company.reviews?.map((review) => (
          <div key={review.id}>
            <em>{review.comment}</em> 
           
              <em>{review.rating}/5</em>
          <button onClick={() => handleDeleteClick(review.id)}>Delete review</button>
          </div>
        ))}
      </div>
      <div className="card">
        <h4>Add New Review</h4>
        <ReviewForm user={user} onAddReview={handleAddReview} />
      </div>
    </section>
  );
}

export default Company;
