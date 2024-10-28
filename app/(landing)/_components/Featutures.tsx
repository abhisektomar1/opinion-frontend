import { Globe, Filter, LogOut, Users } from 'lucide-react'

export default function Features() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-16 px-4 sm:px-6 lg:px-8 h-[90vh]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 leading-tight mt-[90px]">
          Probo takes care of you,<br className="hidden sm:inline" /> so you take care of your trades.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-[100px]">
          <FeatureCard
            icon={<Globe className="w-12 h-12 text-purple-500 dark:text-purple-400" />}
            title="Fastest news feed in the game"
            description="Probo is all about understanding the world around us and benefiting from our knowledge. Everything on Probo is based on real events that you can learn about, verify and follow yourself."
          />
          <FeatureCard
            icon={<Filter className="w-12 h-12 text-purple-500 dark:text-purple-400" />}
            title="All the news without the noise"
            description="Our experts go through tons of information to get to the very core of a world event. They help you develop not only an opinion about events but also a better understanding of the world around us."
          />
          <FeatureCard
            icon={<LogOut className="w-12 h-12 text-purple-500 dark:text-purple-400" />}
            title="The power to exit trades, anytime"
            description="Probo is an opinion trading platform. And, like a true trading platform, Probo gives you the power to exit. You can withdraw from a trade, if it's not going in the direction you thought it will go."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-purple-500 dark:text-purple-400" />}
            title="The pulse of society is on Probo"
            description="Besides helping you learn important financial & trading skills, Probo also helps you understand the collective thoughts of Indians. Knowledge that is crucial for the betterment of our country."
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}