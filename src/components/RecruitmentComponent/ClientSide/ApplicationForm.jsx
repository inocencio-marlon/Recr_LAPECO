import React from 'react';
import './ApplicationForm.css';
import logo from '../../../assets/logo.png';

const ApplicationForm = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="form-header">
          <div className="logo-container">
            <img src={logo} alt="LAPECO Logo" className="form-logo" />
          </div>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <p className="form-description">
          Thank you for your interest in joining our team! Please complete the application form
          below with accurate and up-to-date information. This will help us assess your
          qualifications and match you with the right opportunity. We look forward to learning more
          about you.
        </p>
        
        <form className="application-form">
          {/* Full Name */}
          <div className="form-group">
            <label>Full name *</label>
            <input type="text" required />
          </div>
          
          {/* Email */}
          <div className="form-group">
            <label>Email *</label>
            <input type="email" required />
          </div>
          
          {/* Age, Birthdate, Gender */}
          <div className="form-row">
            <div className="form-group short">
              <label>Age *</label>
              <input type="number" min="18" required />
            </div>
            <div className="form-group short">
              <label>Birthdate *</label>
              <input type="date" required />
            </div>
            <div className="form-group short">
              <label>Gender *</label>
              <div className="gender-options">
                <label>
                  <input type="radio" name="gender" value="male" required /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="female" /> Female
                </label>
                <label>
                  <input type="radio" name="gender" value="other" /> Other
                </label>
              </div>
            </div>
          </div>
          
          {/* Address */}
          <div className="form-group">
            <label>Address *</label>
            <input type="text" required />
          </div>
          
          {/* File Uploads */}
          <div className="form-row">
            <div className="form-group">
              <label>Upload your resume *</label>
              <label className="file-upload">
                choose file
                <input type="file" accept=".pdf,.doc,.docx" required />
              </label>
            </div>
            <div className="form-group">
              <label>Upload your image *</label>
              <label className="file-upload">
                choose file
                <input type="file" accept="image/*" required />
              </label>
            </div>
          </div>
          
          <button type="submit" className="submit-button">Send application</button>
          
          <p className="form-agreement">
            By clicking Send application, you agree to our User Agreement, Privacy Policy, and Cookie Policy.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm; 