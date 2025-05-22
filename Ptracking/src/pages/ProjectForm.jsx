import { Link } from 'react-router-dom';
import '../css/ProjectData.css'; // optional styling

function ProjectDataOverview() {
  return (
    
    <div className="cards-container">
      <div className="card">
        <h3>Update Project Data</h3>
        <p>Update financials, human resources, and project expectations.</p>
        <Link to="/project-data-form" className="btn">Open Form</Link>
      </div>
      <div className="card">
        <h3>Submit Analytics Report</h3>
        <p>Report on outreach, expenditure, and project efficiency.</p>
        <Link to="/analyticsReportform" className="btn">Open Report</Link>
      </div>
    </div>
  );
}

export default ProjectDataOverview;
