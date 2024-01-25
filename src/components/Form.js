import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    dob: '',
    sex: '',
    marital_status: '',
    city:'',
    province: '',
    passport:'',
    occupation: '',
    education: '',
    digital_address: '',
    country_from: '',
    country_to: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://magarette.pythonanywhere.com/visa/api/forms/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // reset the form fields
        setFormData({
          name: '',
          email: '',
          telephone: '',
          dob: '',
          sex: '',
          marital_status: '',
          city:'',
          province: '',
          passport:'',
          occupation: '',
          education: '',
          digital_address: '',
          country_from: '',
          country_to: '',
        });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>*Note:Informations submitted cannot be editted in anyway. Carefully check your details whiles filling out the form.</h4>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      {/* <br /> */}

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      {/* <br /> */}

      <label>
        Telephone:
        <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} className='mini'/>
      </label>
      {/* <br /> */}

      <label>
        Date of Birth:
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
      </label>
      {/* <br/>  */}

      <label>
        Sex:
        <select name="sex" value={formData.sex} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>


      <label>
        Marital Status:
        <select name="marital_status" value={formData.marital_status} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="married">Married</option>
          <option value="single">Single</option>
          <option value="divorced">Divorced</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br/>
      <label>
        City/Town:
        <input type="text" name="city" value={formData.city} onChange={handleChange} className='mini'/>
      </label>
      <label>
        Province/Region:
        <input type="text" name="province" value={formData.province} onChange={handleChange} className='mini'/>
      </label>

      <label>
        Digital Address:
        <input type="text" name="digital_address" value={formData.digital_address} onChange={handleChange} className='mini'/>
      </label>
      {/* <br /> */}
      <label>
        Occupation:
        <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} />
      </label>
      {/* <br /> */}

      <label>
        Education:
        <select name="education" value={formData.education} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="high school">High School</option>
          <option value="degree">Degree</option>
          <option value="masters">Masters</option>
          <option value="other">Other</option>
        </select>
      </label>

      
      {/* <br/> */}
      <label>
        Country From:
        <input type="text" name="country_from" value={formData.country_from} onChange={handleChange}  className='mini'/>
      </label><br />  
      <label>
        Do you have a valid national passport:
        <select name="passport" value={formData.passport} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </label>
      <label>
        Country To:
        <select name="country_to" value={formData.country_to} onChange={handleChange}>
          <option value="">Select...</option>
          <option value="canada">Canada</option>
          <option value="uae">UAE</option>
          <option value="australia">Australia</option>
          <option value="uk">UK</option>
          <option value="germany">Germany</option>
        </select>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
