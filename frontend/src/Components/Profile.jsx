import React, { useEffect, useState } from 'react';
import defaultProfileImage from '../assets/icons/user.png'; // Default profile icon

function Profile() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [address, setAddress] = useState('');
  const [profileImage, setProfileImage] = useState(null); // For storing the profile picture

  // Load stored user data (name, email, and profile picture) from localStorage
  useEffect(() => {
    const storedUserName = localStorage.getItem('userName');
    const storedUserEmail = localStorage.getItem('userEmail');
    const storedProfileImage = localStorage.getItem('profileImage');

    setUserName(storedUserName || 'Guest');
    setUserEmail(storedUserEmail || 'No email available');
    setProfileImage(storedProfileImage ? storedProfileImage : defaultProfileImage); // Set default if not available
  }, []);

  // Handle address change
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  // Handle profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set the new profile picture
        localStorage.setItem('profileImage', reader.result); // Save it to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-20 max-sm:mt-[150px]">
      {/* Profile Picture in Rounded Container */}
      <div className="w-[200px] h-[200px] max-sm:w-[100px] max-sm:h-[100px] rounded-full overflow-hidden border-4 border-gray-300 mb-4">
        <img
          className="w-full h-full object-cover"
          src={profileImage}
          alt="Profile"
        />
      </div>

      {/* Change Profile Picture Button */}
      <div>
        <input
          type="file"
          onChange={handleProfileImageChange}
          accept="image/*"
          className="hidden"
          id="profilePicInput"
        />
        <label htmlFor="profilePicInput" className="cursor-pointer text-blue-500 hover:text-blue-700">
          Change Profile Picture
        </label>
      </div>

      {/* User Name */}
      <div className="mt-10">
        <h1 className="font-semibold text-xl max-sm:text-sm">{userName}</h1>
      </div>

      {/* User Email */}
      <div className="mt-6">
        <h2 className="font-semibold text-lg max-sm:text-sm">Your Email: {userEmail}</h2>
      </div>

      {/* User Address */}
      <div className="mt-10">
        <h3 className="font-semibold text-lg max-sm:text-sm">Your Address</h3>
        <textarea
          className="bg-gray-100 focus:bg-white focus:outline-none w-[350px] max-sm:w-[280px] max-sm:h-[80px] h-[100px] mt-2 p-2 rounded max-sm:text-sm shadow-lg"
          value={address}
          onChange={handleAddressChange}
          placeholder="Enter your address here"
        />
      </div>
    </div>
  );
}

export default Profile;
