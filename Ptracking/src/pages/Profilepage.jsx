// src/pages/ProfilePage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import '../css/Profilepage2.css'; // Optional for styling

const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Validated profile data:', data);
    // Add your API call or state update here
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
        {/* Profile Picture */}
        <label>Profile Picture</label>
        <input
          type="file"
          accept="image/*"
          {...register('profilePic', {
            required: 'Profile picture is required',
          })}
        />
        {errors.profilePic && <p className="error">{errors.profilePic.message}</p>}

        {/* Phone Number */}
        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="e.g. +256701234567"
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^\+?\d{9,15}$/,
              message: 'Enter a valid phone number',
            },
          })}
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}

        {/* Bio */}
        <label>Short Bio</label>
        <textarea
          placeholder="Tell us about yourself"
          {...register('bio', {
            maxLength: {
              value: 200,
              message: 'Bio must be under 200 characters',
            },
          })}
        />
        {errors.bio && <p className="error">{errors.bio.message}</p>}

        {/* Username */}
        <label>Username</label>
        <input
          type="text"
          disabled
          value="exampleUser" // You should fetch this from context or auth
          {...register('username')}
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfilePage;
