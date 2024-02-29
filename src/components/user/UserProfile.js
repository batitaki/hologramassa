import React, { useState, useEffect } from 'react';
import './UserProfile.css';
import pencilIcon from '../../assets/pencil-icon.png';
import { editUserProfile } from '../../services/usersAPI';
import PhotoUploader from '../collection/media/PhotoUploader';
import MediaPhotos from '../collection/media/MediaPhotos';
import DragDrop from '../collection/media/dragAndDrop/DragDrop';
import DragAndDropProvider from '../collection/media/dragAndDrop/DragAndDropProvider';

function UserProfile({ isLoggedIn, userData, setUserData }) {
  const [isEditing, setIsEditing] = useState(false); // Estado para controlar la edición
  const [newPhoto, setNewPhoto] = useState('');
  const [newName, setNewName] = useState('');
  const [newBio, setNewBio] = useState('');

  const handleEdit = () => {
    setIsEditing(true); // Al hacer clic en "EDIT", activa el modo de edición
  };

  const handlePhotoChange = (event) => {
    setNewPhoto(event.target.value);
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleBioChange = (event) => {
    setNewBio(event.target.value);
  };

  const handleSubmit = async () => {
    const userId = userData.ID;
    const token = localStorage.getItem('token');

    const formData = {
      Username: newName || userData.Username,
      Bio: newBio || userData.Bio,
      Image: newPhoto || userData.Image,
    };

    const response = await editUserProfile(userId, formData, token);
    if (response.success) {
      console.log('Perfil de usuario actualizado correctamente');
      setUserData((prevUserData) => ({ ...prevUserData, ...formData }));
      localStorage.setItem('userData', JSON.stringify(userData));
      setNewBio(formData.Bio);
    } else {
      console.error('Error al actualizar el perfil del usuario');
    }
    setIsEditing(false); // Desactiva el modo de edición después de enviar los cambios
  };

  return (
    <>
      <div className="profile">
        {isLoggedIn && userData && (
          <div className="profile-container">
            <div className="bio-username">
              <div className="username-container">
                {isEditing ? (
                  <input
                    type="text"
                    value={newName || userData.Username}
                    onChange={handleNameChange}
                  />
                ) : (
                  <span className="username">{userData.Username}</span>
                )}
                <div
                  className={`edit-icon-container ${isEditing ? '' : 'hidden'}`}
                  onClick={handleEdit}
                >
                  <img src={pencilIcon} alt="Edit" className="edit-icon" />
                </div>
              </div>
              <div className="bio-container">
                {isEditing ? (
                  <input
                    type="text"
                    value={newBio || userData.Bio}
                    onChange={handleBioChange}
                  />
                ) : (
                  <span className="bio">{userData.Bio}</span>
                )}
                <div
                  className={`edit-icon-container ${isEditing ? '' : 'hidden'}`}
                  onClick={handleEdit}
                >
                  <img src={pencilIcon} alt="Edit" className="edit-icon" />
                </div>
              </div>
            </div>
            <div className="profile-image-container">
              {isEditing ? (
                <input type="file" onChange={handlePhotoChange} />
              ) : (
                <img
                  src={userData.Image}
                  alt="Profile"
                  className="profile-image"
                />
              )}
              <div
                className={`edit-icon-container ${isEditing ? '' : 'hidden'}`}
                onClick={handleEdit}
              >
                <img src={pencilIcon} alt="Edit" className="edit-icon" />
              </div>
            </div>
            
            {isEditing && (
              <button onClick={handleSubmit}>SAVE</button>
            )}
          </div>
        )}
         <div className="edit-profile">
        {isLoggedIn && userData && (
      
            <button className='button-edit-profile' onClick={handleEdit}>EDIT PROFILE</button>
        )}
       
            <PhotoUploader isLoggedIn={isLoggedIn} userData={userData} />

        </div>
      </div>

      <DragAndDropProvider>
        <DragDrop />
      </DragAndDropProvider>
    </>
  );
}

export default UserProfile;