import React, { useState } from "react";

const ProjectDataForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    category: "",
    budget: "",
    fundsReceived: "",
    donors: [""],
    allocation: { Operations: "", Staff: "", Materials: "" },
    phases: [""],
    team: [{ name: "", role: "" }],
    goals: "",
    outreach: "",
    startDate: "",
    endDate: "",
  });

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const updateNestedField = (section, key, value) => {
    setFormData({ ...formData, [section]: { ...formData[section], [key]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-green-900">Register New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Basic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
          <h3 className="col-span-full text-xl font-semibold text-green-800">General Information</h3>
          <input
            type="text"
            placeholder="Project Title"
            className="input-style"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
          />
          <input
            type="text"
            placeholder="Category"
            className="input-style"
            value={formData.category}
            onChange={(e) => updateField("category", e.target.value)}
          />
          <textarea
            placeholder="Short Summary"
            className="input-style col-span-full"
            value={formData.summary}
            onChange={(e) => updateField("summary", e.target.value)}
          />
        </div>

        {/* Financial Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
          <h3 className="col-span-full text-xl font-semibold text-green-800">Financial Aspect</h3>
          <input
            type="number"
            placeholder="Planned Budget (UGX)"
            className="input-style"
            value={formData.budget}
            onChange={(e) => updateField("budget", e.target.value)}
          />
          <input
            type="number"
            placeholder="Funds Received"
            className="input-style"
            value={formData.fundsReceived}
            onChange={(e) => updateField("fundsReceived", e.target.value)}
          />

          {/* Donors */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Contributing Donors</label>
            {formData.donors.map((donor, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Donor ${i + 1}`}
                className="input-style mt-2"
                value={donor}
                onChange={(e) => {
                  const donors = [...formData.donors];
                  donors[i] = e.target.value;
                  updateField("donors", donors);
                }}
              />
            ))}
            <button
              type="button"
              className="text-sm text-blue-500 mt-2"
              onClick={() => updateField("donors", [...formData.donors, ""])}
            >
              + Add Donor
            </button>
          </div>

          {/* Allocation Pie (Rough Sketch) */}
          <div className="col-span-full grid grid-cols-3 gap-4">
            {Object.keys(formData.allocation).map((key) => (
              <input
                key={key}
                type="number"
                placeholder={`${key} Allocation (UGX)`}
                className="input-style"
                value={formData.allocation[key]}
                onChange={(e) => updateNestedField("allocation", key, e.target.value)}
              />
            ))}
          </div>
        </div>

        {/* Human Resources */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
          <h3 className="col-span-full text-xl font-semibold text-green-800">Human Aspect</h3>

          {/* Phases */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Project Phases</label>
            {formData.phases.map((phase, i) => (
              <input
                key={i}
                type="text"
                placeholder={`Phase ${i + 1}`}
                className="input-style mt-2"
                value={phase}
                onChange={(e) => {
                  const phases = [...formData.phases];
                  phases[i] = e.target.value;
                  updateField("phases", phases);
                }}
              />
            ))}
            <button
              type="button"
              className="text-sm text-blue-500 mt-2"
              onClick={() => updateField("phases", [...formData.phases, ""])}
            >
              + Add Phase
            </button>
          </div>

          {/* Team */}
          <div className="col-span-full">
            <label className="block text-sm font-medium text-gray-700">Team Members</label>
            {formData.team.map((member, i) => (
              <div key={i} className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="input-style"
                  value={member.name}
                  onChange={(e) => {
                    const team = [...formData.team];
                    team[i].name = e.target.value;
                    updateField("team", team);
                  }}
                />
                <input
                  type="text"
                  placeholder="Role"
                  className="input-style"
                  value={member.role}
                  onChange={(e) => {
                    const team = [...formData.team];
                    team[i].role = e.target.value;
                    updateField("team", team);
                  }}
                />
              </div>
            ))}
            <button
              type="button"
              className="text-sm text-blue-500 mt-2"
              onClick={() => updateField("team", [...formData.team, { name: "", role: "" }])}
            >
              + Add Member
            </button>
          </div>
        </div>

        {/* Expected Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 rounded-xl shadow">
          <h3 className="col-span-full text-xl font-semibold text-green-800">Expected Results</h3>
          <input
            type="date"
            placeholder="Start Date"
            className="input-style"
            value={formData.startDate}
            onChange={(e) => updateField("startDate", e.target.value)}
          />
          <input
            type="date"
            placeholder="End Date"
            className="input-style"
            value={formData.endDate}
            onChange={(e) => updateField("endDate", e.target.value)}
          />
          <textarea
            placeholder="Goals"
            className="input-style col-span-full"
            value={formData.goals}
            onChange={(e) => updateField("goals", e.target.value)}
          />
          <textarea
            placeholder="Expected Outreach"
            className="input-style col-span-full"
            value={formData.outreach}
            onChange={(e) => updateField("outreach", e.target.value)}
          />
        </div>

        {/* Submit */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Submit Project
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectDataForm;
