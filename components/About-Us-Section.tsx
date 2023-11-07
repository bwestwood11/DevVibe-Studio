const AboutUsSection1 = () => {
  return (
    <div className="w-full bg-gradient-to-r from-orange-200 to-teal-100 mt-20 pb-20">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 mt-20 px-8">
                <div className="basis-1/2 flex flex-col shadow-xl bg-white rounded-md p-8">
                     <h4 className="text-orange-500 uppercase font-bold mb-6">Our Value</h4>
                     <h2 className="text-3xl font-extrabold mb-6">Creative Solutions deliver profits to your door</h2>
                     <p className="text-gray-600 leading-7 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. A optio deleniti ipsum quos aut cumque sed ratione eveniet. Reprehenderit earum deserunt, error est saepe aperiam repellendus aliquam facere asperiores dicta.</p>
                     <button className="bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white w-1/2 mt-6 whitespace-nowrap px-6 py-3 rounded-lg uppercase font-bold tracking-widest text-xs group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all">Discover More</button>
                </div>
                <div className="basis-1/2 flex flex-col gap-8">
                    <div className="bg-white shadow-xl rounded-md p-8">
                         <h4 className="text-xl font-extrabold mb-6">Our Vision</h4>
                         <p className="text-gray-600 leading-7 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat architecto quam, pariatur autem, recusandae odio eveniet repudiandae sint maiores similique quaerat, adipisci harum culpa illo. Autem aspernatur voluptas tempora?</p>
                    </div>  
                    <div className="bg-white shadow-xl rounded-md p-8">
                         <h4 className="text-xl font-extrabold mb-6">Our Mission</h4>
                         <p className="text-gray-600 leading-7 tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat architecto quam, pariatur autem, recusandae odio eveniet repudiandae sint maiores similique quaerat, adipisci harum culpa illo. Autem aspernatur voluptas tempora?</p>
                    </div>  
                </div>
         </div>

    </div>
  );
};

export default AboutUsSection1;
