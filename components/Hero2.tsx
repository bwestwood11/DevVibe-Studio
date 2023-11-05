import { Badge } from "@/components/ui/badge"

const Hero2 = () => {
  return (
    <div className='w-full h-full bg-[#F3F4F6] pb-20 sm:pb-0 py-20'>
        <div className='max-w-7xl mx-auto sm:flex sm:flex-row flex-col'>
        <div className='basis-1/2 flex flex-col gap-8'>
             <Badge className="w-1/4 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600">Premium Services</Badge>
             <h1>An Agency That S</h1>
        </div>
           <div className='basis-1/2 flex'>

           </div>
        </div>
    </div>
  )
}

export default Hero2