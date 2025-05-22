import React, { useState } from 'react';
import '../css/NGOregisterPage.css';

const NGORegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    registration_number: '',
    country: '',
    district: '',
    address: '',
    contact_email: '',
    contact_phone: '',
    website: '',
    logo: '',
    mission: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.registration_number) newErrors.registration_number = 'Registration number is required.';
    if (!formData.contact_email || !/\S+@\S+\.\S+/.test(formData.contact_email)) {
      newErrors.contact_email = 'Valid email required.';
    }
    if (!formData.contact_phone || !/^[0-9+]+$/.test(formData.contact_phone)) {
      newErrors.contact_phone = 'Valid phone number required.';
    }
    if (!formData.country) newErrors.country = 'Country is required.';
    if (!formData.mission) newErrors.mission = 'Mission is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Registering NGO with:', formData);
      alert('NGO Registered Successfully!');
    }
  };

  return (
    <div className="ngo-register-container">
      <main className="ngo-register-main">
        <h2>Register an NGO</h2>
        <form onSubmit={handleSubmit} className="ngo-register-form">
          {[
            { label: 'NGO Name', name: 'name' },
            { label: 'Registration Number', name: 'registration_number' },
            { label: 'Country', name: 'country' },
            { label: 'District', name: 'district' },
            { label: 'Address', name: 'address' },
            { label: 'Email', name: 'contact_email', type: 'email' },
            { label: 'Phone', name: 'contact_phone', type: 'tel' },
            { label: 'Website', name: 'website' },
          ].map(({ label, name, type = 'text' }) => (
            <div className="form-group" key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
              />
              {errors[name] && <small className="error">{errors[name]}</small>}
            </div>
          ))}

          <div className="form-group">
            <label>Logo</label>
            <input type="file" name="logo" accept="image/*" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Mission</label>
            <textarea
              name="mission"
              rows="4"
              value={formData.mission}
              onChange={handleChange}
            />
            {errors.mission && <small className="error">{errors.mission}</small>}
          </div>

          <button type="submit" className="submit-btn">Register NGO</button>
        </form>
      </main>
    </div>
  );
};

export default NGORegisterPage;
