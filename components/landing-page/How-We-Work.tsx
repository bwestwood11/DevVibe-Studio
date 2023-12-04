import { montserrat } from "@/app/fonts";


const steps = [
    {
        step: 1, 
        description: 'Book a free consultation with us to discuss your desires & goals.' 
    },
    {
        step: 2, 
        description: 'If we are a good match then we create a customized plan.' 
        
    },
    {
        step: 3, 
        description: 'Sit back & relax while we design and develop your business.'
        
         
    },

]

const HowWeWork = () => {
  return (
    <div className="w-full bg-[#F3F4F6] pt-24 pb-10 px-10 sm:px-0">
      <div className="max-w-6xl mx-auto flex flex-col text-center">
        <h2 className={`font-extrabold text-4xl ${montserrat.className}`}>How We Work</h2>
        <p className="max-w-md mx-auto pt-6">
          Have your own team of professional web designers & web developers when needed. Let us build out a complete website or hire us for an on call basis. 
        </p>
      </div>
      <div className="grid md:grid-cols-3 max-w-5xl gap-20 mx-auto pt-8 px-6">
        {steps.map((step) => (
          <div className= 'flex flex-col items-center justify-center max-w-2xl mx-auto'>
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white font-bold text-2xl">
              {step.step}
            </div>
            <p className="text-center max-w-md mx-auto pt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
