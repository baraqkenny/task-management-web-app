import {useState} from "react";
import SideNav from "./SideNav";
import './HomePage.css';
import Dashboard from "./Dashboard";
import AddProject from "./AddProject";



function HomePage() {
  const [activeContent, setActiveContent] = useState(null);


  const handleDashboardClick = () => {
    setActiveContent("dashboard");
  };
  
      const handleAddProjectClick = () => {
        setActiveContent("addProject");
      };

  return (
    <div className="home-container">
      <SideNav
        onDashboardClick={handleDashboardClick}
        onAddProjectClick={handleAddProjectClick}
      />
      <Dashboard  activeContent={activeContent} />
      <AddProject activeContent={activeContent} />
    </div>
  );
}

export default HomePage
