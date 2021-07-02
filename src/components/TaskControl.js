 import React from 'react';
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";


function TaskControl(props) {

    return (
        <div className="row mt-15">
            {/* SEARCH */}
           <TaskSearch/>
            {/* SORT */}
            <TaskSort/>
        </div>
    );
}

export default TaskControl;