import ProjectItem from "./ProjectItem"
import portfolio1 from "@/public/portfolio1.png"
import theplug from "@/public/theplug.png"
import waterstreet from "@/public/waterstreet-image.png"

const Projects = () => {
    return (
      <div id='projects' className='w-full h-full'>
           <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#e86a1e]'>Projects</p>
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
        <ProjectItem 
        title='Waterstreet Mortgage' 
        backgroundImg={waterstreet.src}
        projectUrl='/portfolio/waterstreet-mortgage'
        number='03'
        technology = 'Next.js 13'
        /> 
            </div>
           </div>
      </div>
    )
  }
  
  export default Projects