import { useState} from 'react';
import './AddProject.css';

function AddProject({ activeContent}) {
  const [projectName, setProjectName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
   const [selectedProjectCategory, setSelectedProjectCategory] = useState("all");
   const [selectedAssignee, setSelectedAssignee] = useState("ken");


  const handleSubmit = (e) => {
    e.preventDefault();
    // 
    if(pr)
    // Clear form on add project button click
    setProjectName("");
    setProjectDetails("");
    setDueDate("");
    setSelectedProjectCategory("");
    setSelectedAssignee("");


    console.log("Project Name:", projectName);
    console.log("Project Details:", projectDetails);
    console.log("Due Date:", dueDate);
    console.log("project category:", selectedProjectCategory);
    console.log("Assigned to:", selectedAssignee);
  };
 


  return (
    <div className="add-project-container">
      {activeContent === "addProject" && (
        <div className='form'>
          <form onSubmit={handleSubmit}>
            {/* Project Name */}
              <label htmlFor="projectName">Project Name:</label>
              <input
                className='project-name'
                type="text"
                id="projectName"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            
            {/* Project Details */}
              <label htmlFor="projectDetails">Project Details:</label>
              <textarea
                id="projectDetails"
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
              />
            
            {/* Project Due Date */}
              <label htmlFor="dueDate">Due Date:</label>
              <input
                type="date"
                id="dueDate"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />

              {/* Project Category */}
              <label htmlFor="selectOption">Project category:</label>
              <select
                id="selectOption"
                value={selectedProjectCategory}
                onChange={(e)=> setSelectedProjectCategory(e.target.value)}
              >
                <option value="all">All</option>
                <option value="">Me</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="sales">Sales</option>
              </select>

                {/* Project Assigned to ? */}
              <label htmlFor="selectOption">Assign To:</label>
              <select
                id="selectOption"
                value={selectedAssignee}
                onChange={(e)=> setSelectedAssignee(e.target.value)}
              >
                <option value="ken">Ken</option>
                <option value="mary">Mary</option>
                <option value="vishwas">Vishwas</option>
                <option value="tom">Tom</option>
                <option value="brady">Brady</option>
              </select>

                {/* Add Project Button */}
            <button className='add-project-btn' type="submit">Add Project</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddProject
