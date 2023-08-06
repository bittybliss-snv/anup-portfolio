import "../style/Form.css"

import React, {useState} from 'react'

 const Form = () => {
  const [data, setData] = useState({name:"", email:"", text:"", message:""});
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    alert(data)
  }

  return (
    <div className="form">
        <form method="post" onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={handleChange} value={data.name}></input>
            <label>Email</label>
            <input type="email" onChange={handleChange} value={data.email}></input>
            <label>Subject</label>
            <input type="text" onChange={handleChange} value={data.text}></input>
            <label>Message</label>
            <textarea name="message" rows="6" onChange={handleChange} value={data.message} placeholder="Type Message"/>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form