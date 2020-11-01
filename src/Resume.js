import React from 'react'
import ResumeData from './ResumeData'
import SkillsData from './SkillsData'
import './Resume.css'
function Resume() {
    const sections = ResumeData.map(item => {
        const points = item[item.Title].map(point => {
            return (
                <div key={point.id}className='mcontainer'>
                    <div className='lcontainer'>
                      <p><b>{point.name}</b></p>
                      <p>{point.time}</p>
                    </div>
                    <div className='rcontainer'>
                      <p><b>{point.title}</b></p>
                      <p>{point.description}</p>
                    </div>
                </div>
            )
        })
        return(
            <div id={item.Title}>
                <h3>{item.Title}</h3>
                {points}
            </div>
        )
    })

    const skillcategories = SkillsData.map(skillcategory => {
      const skills = skillcategory['skills'].map(skill => {
        return (
          <li id={skill.id}>{skill.name}</li>
        )
      })
      return(
        <div id={skillcategory.title}>
          <p><b>{skillcategory.title}</b></p>
          <ul>
            {skills}
          </ul>
        </div>
      )
    })
    return(
        <>
            <div className='resume-container'>
                <div id='resume-title'>
                    <h1>Resume</h1>
                </div>
                {sections}
                <div id='Skills'>
                  <h3>Skills</h3>
                  {skillcategories}
                </div>
            </div>
        </>
    )
}

export default Resume
