import React from 'react'
import Header from './header/Header'
import Experience from './experience/Experience'
import Skills from './skills/Skills'
import Hobbies from './hobbies/Hobbies'
import Project1 from './projects/project1/Project1'
import Project2 from './projects/project2/Project2'
import Project3 from './projects/project3/Project3'
const Components = () => {
  return (
    <div>
      <Header/>
      <Experience/>
      <Project1/>
      <Project2/>
      <Project3/>
      <Skills/>
      <Hobbies/>
    </div>
  )
}

export default Components
