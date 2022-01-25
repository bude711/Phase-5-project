import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/api/companies")
      .then((r) => r.json())
      .then(setCompanies);
  }, []);


  return (
    <section className="container">
      {companies.map((company) => (
        <div key={company.id} className="company-card">
          
            <Link to={`/companies/${company.id}`}>
            <img src={company.img_url} width="350" height="200" alt={company.name} />
            {/* <p>{company.name}</p> */}
            </Link>
            <p>{company.name}</p>
            <p>{company.location}</p>
          
        </div>
      ))}
    </section>
  );
}

export default Home;
