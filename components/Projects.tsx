import ProjectItem from "./ProjectItem"
import portfolio1 from "@/public/portfolio1.png"
import theplug from "@/public/theplug.png"

const Projects = () => {
    return (
      <div id='projects' className='w-full h-full'>
           <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#f1592a]'>Projects</p>
            <h2 className='py-4'>What We Have Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
  
        <ProjectItem 
        title='Competitive Edge Junk Removal' 
        backgroundImg={portfolio1.src}
        projectUrl='/portfolio/competitive-edge-junk-removal'
        number='01'
        technology = 'Next.js 13'
        /> 
        <ProjectItem 
        title='Appliance Plug YouTube Channel' 
        backgroundImg={theplug.src}
        projectUrl='/portfolio/appliance-plug-youtube-channel'
        number='02'
        technology = 'Content Creation'
        /> 
            </div>
           </div>
      </div>
    )
  }
  
  export default Projects