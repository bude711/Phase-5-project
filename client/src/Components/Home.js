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
        <div key={company.id} className="card">
          <h2>
            <Link to={`/companies/${company.id}`}>
            <img src={company.img_url} width="500" height="300" alt={company.name} />
            </Link>
          </h2>
        </div>
      ))}
    </section>
  );
}

export default Home;
