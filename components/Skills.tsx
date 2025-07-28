import React from 'react'
import { OrbitingCircles } from './magicui/orbiting-circles'
import { Icons } from './icons'
import { RiSupabaseFill, RiTailwindCssFill } from 'react-icons/ri'
import { FaNodeJs, FaPython } from 'react-icons/fa'
import { BiLogoPython } from 'react-icons/bi'
import { DiJavascript, DiMysql } from 'react-icons/di'
import { SiExpress } from 'react-icons/si'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { BlurFade } from './magicui/blur-fade'
import { Badge } from './ui/badge'
import Data from '@/Data/data'

const Skills = () => {
  return (
    <div  className="relative flex items-center justify-center overflow-hidden h-[500px] w-full">
      
        <OrbitingCircles iconSize={50} radius={190} reverse={true}>
            <Icons.react className="text-4xl text-blue-500" />
            <Icons.nextjs className="text-4xl text-black" />
            <RiTailwindCssFill className="text-4xl text-blue-400" />
            <RiSupabaseFill className="text-4xl text-green-500" />
            <FaNodeJs className="text-4xl text-green-600" />
            <SiExpress className="text-4xl text-gray-600" />
            <DiMysql className="text-4xl text-blue-500" />
            <GitHubLogoIcon className="text-8xl text-black"  />
            
        </OrbitingCircles>
        <OrbitingCircles iconSize={40} radius={80}>
            <Icons.c className="text-4xl text-blue-500" />
            <Icons.Cpp className="text-4xl text-blue-500" />
            <BiLogoPython className="text-4xl " />
            <Icons.typescript className="text-4xl text-blue-500" />
            <DiJavascript className="text-4xl text-yellow-500" />
        </OrbitingCircles>


    </div>  
  )
}

export default Skills

