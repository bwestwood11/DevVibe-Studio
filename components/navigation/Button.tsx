import { cn } from "@/lib/utils"
import { Source_Sans_3 } from "next/font/google"

const sans = Source_Sans_3({ subsets: ["latin"] });

const Button = () => {
  return (
    <button className={cn(sans.className, "bg-gradient-to-r from-orange-300 via-orange-400 to-orange-600 text-white px-6 py-3 rounded-lg uppercase font-bold tracking-widest text-sm group hover:from-orange-600 hover:via-orange-400 hover:to-orange-300 transition-all")}>
      Learn More
    </button>
  )
}

export default Button;