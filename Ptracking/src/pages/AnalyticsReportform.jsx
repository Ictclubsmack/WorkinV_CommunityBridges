import React, { useState } from 'react';
import '../css/AnalyticsReportForm.css';

const AnalyticsReportForm = () => {
  const [formData, setFormData] = useState({
    projectId: '',
    outreachEfficiency: '',
    expenditureEfficiency: '',
    goalsAccomplished: '',
    totalGoals: '',
    actualProgress: '',
    projectedTimeline: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted report:', formData);
    // Submit logic here
  };

  return (
    <div className="report-form-container">
      <h2>Submit Project Analytics Report</h2>
      <form onSubmit={handleSubmit} className="report-form">
        <label>
          Project ID or Name:
          <input type="text" name="projectId" value={formData.projectId} onChange={handleChange} required />
        </label>

        <label>
          Outreach Efficiency (%):
          <input type="number" name="outreachEfficiency" value={formData.outreachEfficiency} onChange={handleChange} required />
        </label>

        <label>
          Expenditure Efficiency (%):
          <input type="number" name="expenditureEfficiency" value={formData.expenditureEfficiency} onChange={handleChange} required />
        </label>

        <label>
          Goals Accomplished:
          <input type="number" name="goalsAccomplished" value={formData.goalsAccomplished} onChange={handleChange} required />
        </label>

        <label>
          Total Goals:
          <input type="number" name="totalGoals" value={formData.totalGoals} onChange={handleChange} required />
        </label>

        <label>
          Actual Progress (%):
          <input type="number" name="actualProgress" value={formData.actualProgress} onChange={handleChange} required />
        </label>

        <label>
          Projected Timeline (e.g. June 2025):
          <input type="text" name="projectedTimeline" value={formData.projectedTimeline} onChange={handleChange} required />
        </label>

        <label>
          Additional Comments:
          <textarea name="comments" value={formData.comments} onChange={handleChange}></textarea>
        </label>

        <button type="submit">Submit Report</button>
      </form>
    </div>
  );
};

export default AnalyticsReportForm;
