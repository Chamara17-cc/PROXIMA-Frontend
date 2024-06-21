import React from "react";
import Topbar from "../../Compornents/Topbar";
import ProjectManagerSidebar from "../../Components-Suraj/ProjectManagerSidebar";
import PMtaskListCom from "../../Components-Suraj/PM-Components-Suraj/PMtaskListCom";

export default function PMtaskListPage() {
  return (
    <div>
      <div className="FullPage">
        <Topbar />
        <ProjectManagerSidebar />
        <div className="Content">
          <h2>Task List</h2>

          <div>
            {/* content */}

            <PMtaskListCom />
          </div>
        </div>
      </div>
    </div>
  );
}
