import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/companies")
      .then((r) => r.json())
      .then(setCompanies);
  }, []);


  return (
    <section className="container">
      {companies.map((company) => (
        <div key={company.id} className="card">
          <h2>
            <Link to={`/companies/${company.id}`}>
              {company.name}
            </Link>
          </h2>
        </div>
      ))}
    </section>
  );
}

export default Home;
