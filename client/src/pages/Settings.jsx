import React, { useState } from 'react';
import axios from 'axios';
import { FiUpload } from 'react-icons/fi';
import toast from 'react-hot-toast';
import SecondNav from '../components/commonComponents/SecondNav';
import Subscription from '../components/Settings/Subscription';

const Settings = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("User Name");
  const [email] = useState("user@example.com");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  const handleSave = async () => {
    // Basic validation
    if (!username) {
      toast.error("Username cannot be empty.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate an API call
      const formData = {
        profilePic,
        username,
        email,
      };

      console.log(formData ,'forn')
      const response = await axios.post('/your-api-endpoint', formData);

      // Check if the response is successful
      if (response.status === 200) {
        toast.success("Settings saved successfully!");
      } else {
        toast.error("Failed to save settings. Please try again.");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Failed to save settings. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SecondNav projectName={'Settings'} pageName={'Account Settings'} />
      <div className='my-8'>
        <h1 className='text-primary text-2xl font-roboto font-bold'>Account Settings</h1>
      </div>
      <div className='flex items-center gap-6'>
        {/* Profile Picture Section */}
        <div className='relative'>
          <div
            className='w-24 h-24 rounded-full bg-gray-300 bg-cover bg-center'
            style={{ backgroundImage: `url(${profilePic})` }}
          >
            <label className='absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full cursor-pointer'>
              <FiUpload />
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={handleProfilePicChange}
                className='hidden'
              />
            </label>
          </div>
        </div>

        {/* Username and Email */}
        <div className='w-full md:w-1/2'>
          <label className='block text-sm font-semibold mb-1'>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full p-2 border border-gray-300 rounded'
          />
        </div>

        <div className='w-full md:w-1/2'>
          <label className='block text-sm font-semibold mb-1'>Email</label>
          <input
            type='text'
            value={email}
            readOnly
            className='w-full p-2 border border-gray-300 rounded bg-gray-100 cursor-not-allowed'
          />
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className='w-full md:w-1/4 py-2 px-4 bg-primary text-white font-semibold text-sm rounded hover:bg-primary-dark transition-colors'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Saving...' : 'Save Settings'}
        </button>
      </div>

      {/* Subscription Area */}
      <div className='mt-20'>
        <Subscription />
      </div>
    </div>
  );
};

export default Settings;
