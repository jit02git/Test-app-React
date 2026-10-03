import React, { useState} from 'react'

const Form = async () => {

    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "phone": "",
        "gender": "",
        "pincode":"",
        "city":"",
        "state":"",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    if(!formData.name || !formData.email || !formData.phone || !formData.gender || !formData.pincode || !formData.city || !formData.state){
        return <p>Please fill in all the fields.</p>;
    }

    const response = await fetch('http://localhost:3000/api/form',
        {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(formData)
        }
    )

  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input type="text" placeholder="Enter Name" value={formData.name} onChange={handleChange}/>
        <input type="text" placeholder="Enter Email" value={formData.email} onChange={handleChange}/>
        <input type="text" placeholder="Enter Phone" value={formData.phone} onChange={handleChange}/>
        <input type="text" placeholder="Enter Gender" value={formData.gender} onChange={handleChange}/>
        <input type="text" placeholder="Enter Pincode" value={formData.pincode} onChange={handleChange}/>
        <input type="text" placeholder="Enter City" value={formData.city} onChange={handleChange}/>
        <input type="text" placeholder="Enter State" value={formData.state} onChange={handleChange}/>
      </form>
    </div>
  )
}

export default Form
