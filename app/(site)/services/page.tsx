

import { CheckIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Web Design & Development',
    description: 'Have the experts create a Google SEO friendly website for your business that is sure to impress.',
  },
  { name: 'UI/UX', description: 'Let us design your website, landing page or ads with proven concepts.' },
  {
    name: 'Website Management',
    description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
  },
  {
    name: 'Content Creation & Management',
    description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
  },
  { name: 'Google SEO', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
  { name: 'Analytics', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
  {
    name: 'Management Systems',
    description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
  },
  {
    name: 'User Sign-up Applications',
    description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-orange-500">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</p>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Check out our services below. We offer a wide range of services to help your business grow. 
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-orange-500" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}