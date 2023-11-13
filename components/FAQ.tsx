import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FAQ = () => {
  return (
    <main className="w-full bg-[#F3F4F6] px-4 pt-20 sm:py-20 text-left flex">
        <div className="max-w-6xl mx-auto">
           <h2 className="font-bold text-2xl tracking-tight mb-4">Frequently Asked Questions</h2>
     <Accordion className="w-full text-gray-900 max-w-2xl" type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>What are the payment options?</AccordionTrigger>
    <AccordionContent>
      We accept all major credit cards, PayPal, and (in select countries) direct debit. 
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>How long does it take to create a website?</AccordionTrigger>
    <AccordionContent>
      A website can vary depending on the complexity of the design and development. Websites can be done in as little as 1 week or as long as 4 weeks.  
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>How the payment process works?</AccordionTrigger>
    <AccordionContent>
      We require a 30% deposit before we start the project. The remaining balance is due upon completion of the project.  
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-4">
    <AccordionTrigger className="text-left">How do we handle the web hosting and domain purchase? </AccordionTrigger>
    <AccordionContent>
      The web hosting and domain purchase is handled by the client. These two costs are usually less than $100 per year and can be purchased from GoDaddy or Namecheap. We can help you with this process if needed, but since they are yearly purchases, we recommend that you purchase them yourself.  
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-5">
    <AccordionTrigger className="text-left">What technology do you use to create the website?</AccordionTrigger>
    <AccordionContent>
      The technology we prefer to use is Next.js. This allows us to customize the website to your needs and create a fast and responsive website. We could use Wordpress or Shopify if you prefer, but we recommend Next.js since this is a framework that allows us to actually code the website and not use a drag and drop website builder.   
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-6">
    <AccordionTrigger>Are the websites created with SEO in mind?</AccordionTrigger>
    <AccordionContent>
      Every website we create is made with SEO in mind. We use the latest SEO techniques to ensure that your website is optimized for Google.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-7">
    <AccordionTrigger className="text-left">Do you have to provide images or text?</AccordionTrigger>
    <AccordionContent>
        The client usually provides the images and copy. We can help you with this process if needed and can provide editing services for pictures/videos for an additional fee.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-8">
    <AccordionTrigger>What if I already have a website?</AccordionTrigger>
    <AccordionContent>
        We can either edit and optimize your current website or create a new website. While the new website will be more expensive, it will be more optimized for SEO and will be faster.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-9">
    <AccordionTrigger>Is a payment system included in our website?</AccordionTrigger>
    <AccordionContent>
        Yes, we can integrate a payment system into your website. We can use Stripe to accept payments either for one-time purchases or even monthly memberships.
    </AccordionContent>
  </AccordionItem>
</Accordion>
</div>
    </main>
  )
}

export default FAQ