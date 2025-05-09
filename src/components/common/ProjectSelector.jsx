import React, { useState } from 'react'
import _ from '../../lib/lib'
import { CiHashtag } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';

const ProjectSelector = ({ project, setProject }) => {
  const projects = _.projects;
  const [openProjects, setOpenProjects] = useState(false);
  return (
    <>
      <div className="relative min-w-45">
        <div className="active flex justify-between items-center py-2 px-4 my-2 rounded-md bg-focusMain cursor-pointer" onClick={() => setOpenProjects(prev => !prev)}>
          <div className="flex gap-x-1 text-sm">
            <span className={`text-xl ${project === 'Personal' ? 'text-blue-500' : project === 'Shopping' ? 'text-green-500' : project === 'Works' ? 'text-orange-500' : project === 'Errands' ? 'text-shadow-cyan-700' : 'text-gray-800'}`}>
              <CiHashtag />
            </span>
            <span>{project}</span>
          </div>
          <span>
            <FaAngleDown />
          </span>
        </div>
        {
          openProjects && (
            <div className="absolute w-full left-0 top-10 p-2 rounded-md bg-white z-10" style={{ boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.2)' }}>
              <input type="text" className="px-3 py-1 border-2 border-accentMain rounded w-full" placeholder="Enter a project type..." />
              <p className="my-2 font-semibold">My Projects</p>
              {
                projects.map(project => (
                  <div key={project} className="active flex justify-between items-center py-2 px-4 my-2 cursor-pointer hover:bg-[#cecece] rounded-md" onClick={() => {
                    setProject(project)
                    setOpenProjects(false)
                  }}>
                    <div className="flex gap-x-1 text-sm">
                      <span className={`text-xl ${project === 'Personal' ? 'text-blue-500' : project === 'Shopping' ? 'text-green-500' : project === 'Works' ? 'text-orange-500' : project === 'Errands' ? 'text-shadow-cyan-700' : 'text-gray-800'}`}>
                        <CiHashtag />
                      </span>
                      <span className="text-fontSecondery">{project}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          )
        }
      </div>
    </>
  )
}

export default ProjectSelector