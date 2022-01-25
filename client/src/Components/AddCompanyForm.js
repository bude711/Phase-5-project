import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddCompanyForm({ onAddCompany}) {
 const navigate = useNavigate();
 const [companyFormData, setCompanyFormData] = useState({
        img_url: "",
        name: "",
        location: "",
        website: "",
        size: "",
        networth: "",
        edi_statement: "",
        bipoc_info: "",
        gender_info: "",
        lgbtqia_info: "",
        disability_info: ""        
    })

    function handleChange(e) {
        setCompanyFormData({
            ...companyFormData, 
            [e.target.name]: e.target.value,
        })
    }

    function handleSubmit(e) {
        e.preventDefault()

        const newCompany = {
            ...companyFormData}

        fetch(`/api/companies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCompany),
        })
            .then((r) => r.json())
            .then((r) => {
                setCompanyFormData({
                    img_url: "",
                    name: "",
                    location: "",
                    website: "",
                    size: "",
                    networth: "",
                    edi_statement: "",
                    bipoc_info: "",
                    gender_info: "",
                    lgbtqia_info: "",
                    disability_info: ""       
                })
                onAddCompany(newCompany)
                navigate('/')
            })
    }

    return (
        <>
        <div className="addcompanycontainer">
            <h2 className="addcompanytitle">New Company Form</h2>
            <form onSubmit={handleSubmit} className="add-company-form">
            <br></br>
                <input 
                    type="text"
                    name="img_url"
                    onChange={handleChange}
                    value={companyFormData.img_url}
                    placeholder="company image url"
                    className="input-text-company"
                />
                <br></br>
                <br></br>
                <input 
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={companyFormData.name}
                    placeholder="company name"
                    className="input-text-company"
                />
                 <br></br>
                 <br></br>
                <input 
                    type="text"
                    name="location"
                    onChange={handleChange}
                    value={companyFormData.location}
                    placeholder="location"
                    className="input-text-company"
                />
                 <br></br>
                 <br></br>
                <input 
                    type="text"
                    name="website"
                    onChange={handleChange}
                    value={companyFormData.website}
                    placeholder="website"
                    className="input-text-company"
                />
                 <br></br>
                 <br></br>
                <input 
                    type="text"
                    name="size"
                    onChange={handleChange}
                    value={companyFormData.size}
                    placeholder="staff size"
                    className="input-text-company"
                />
                 <br></br>
                 <br></br>
                <input 
                    type="text"
                    name="networth"
                    onChange={handleChange}
                    value={companyFormData.networth}
                    placeholder="networth"
                    className="input-text-company"
                />
                 <br></br>
                 <br></br>
                <textarea
                    type="text"
                    name="edi_statement"
                    rows="10"
                    onChange={handleChange}
                    value={companyFormData.edi_statement}
                    placeholder="diversity statement"
                    className="textarea"
                />
                 <br></br>
                 <br></br>
                <textarea 
                    type="text"
                    rows="10"
                    name="bipoc_info"
                    onChange={handleChange}
                    value={companyFormData.bipoc_info}
                    placeholder="bipoc info"
                    className="textarea"
                />
                 <br></br>
                 <br></br>
                <textarea 
                    type="text"
                    name="gender_info"
                    onChange={handleChange}
                    value={companyFormData.gender_info}
                    placeholder="gender info"
                    className="textarea"
                    rows="10"
                />
                 <br></br>
                 <br></br>
                <textarea 
                    type="text"
                    name="lgbtqia_info"
                    onChange={handleChange}
                    value={companyFormData.lgbtqia_info}
                    placeholder="lgbtqia+ info"
                    className="textarea"
                    rows="10"
                />
                 <br></br>
                 <br></br>
                <textarea
                    type="text"
                    name="disability_info"
                    onChange={handleChange}
                    value={companyFormData.disability_info}
                    placeholder="disability info"
                    className="textarea"
                    rows="10"
                />
                 <br></br>
                 <br></br>
                <button  className="submit_button" type="submit"> Submit Company </button>
                
                   </form>
                   
        </div>
        </>
    )
}

export default AddCompanyForm;

