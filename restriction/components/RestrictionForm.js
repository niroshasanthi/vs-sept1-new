import React, { useState, useEffect } from 'react';
import api from '../api/api';
import './RestrictionForm.css';

const RestrictionForm = () => {
  const [children, setChildren] = useState([]);
  const [formData, setFormData] = useState({
    childId: '',
    appName: '',
    dataLimit: '',
    timeLimit: '',
    customRule: '',
    bedTimeStart: '',
    bedTimeEnd: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const res = await api.get('/restrictions/my-children'); // Adjust URL as per your backend
        setChildren(res.data);
        // Auto-select first child if available
        if (res.data.length > 0) {
          setFormData(prev => ({ ...prev, childId: res.data[0].id }));
        }
      } catch (err) {
        console.error('Failed to fetch children:', err);
        setError('Failed to load children.');
      }
    };
    fetchChildren();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await api.post('/restrictions', formData);
      setMessage('Restriction added successfully!');
      setFormData({
        ...formData,
        appName: '',
        dataLimit: '',
        timeLimit: '',
        customRule: '',
        bedTimeStart: '',
        bedTimeEnd: '',
      });
    } catch (err) {
      console.error('Submission error:', err);
      if (err.response) {
        setError(err.response.data?.error || `Error ${err.response.status}`);
      } else if (err.request) {
        setError('No response from server.');
      } else {
        setError(`Request error: ${err.message}`);
      }
    }
  };

  return (
    <div className="inner-form-container">
      <h2>Add Restriction</h2>
      {message && <div className="success-message">{message}</div>}
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Child</label>
          <select name="childId" value={formData.childId} onChange={handleChange} required>
            <option value="" disabled>-- Select Child --</option>
            {children.map(child => (
              <option key={child.id} value={child.id}>{child.username}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <input placeholder="App Name" type="text" name="appName" value={formData.appName} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input placeholder="Data Limit (optional) e.g., 500MB/day" type="text" name="dataLimit" value={formData.dataLimit} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input placeholder="Time Limit (optional) e.g., 2 hours/day" type="text" name="timeLimit" value={formData.timeLimit} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input placeholder="Bedtime Start (optional)" type="time" name="bedTimeStart" value={formData.bedTimeStart} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input placeholder="Bedtime End (optional)" type="time" name="bedTimeEnd" value={formData.bedTimeEnd} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input placeholder="Custom Rule (optional)" type="text" name="customRule" value={formData.customRule} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-button">
          Save Restriction
        </button>
      </form>
    </div>
  );
};

export default RestrictionForm;
