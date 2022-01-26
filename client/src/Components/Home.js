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
    <div className="cards">

     
      {companies.map((company) => (
        <div key={company.id} className="company-card">
          
            <Link to={`/companies/${company.id}`}>
            <img className="companycardimage" src={company.img_url} width="300" height="241" alt={company.name} />
            </Link>
            <p className="homename">{company.name}</p>
            <p className="homename">{company.location}</p>
            <br></br>
          
        </div>
      ))}
    </div>
  );
}

export default Home;
