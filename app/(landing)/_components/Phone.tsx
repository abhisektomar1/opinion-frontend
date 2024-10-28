import { ArrowLeft, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phone() {
  return (
    <div className="h-[90vh] bg-black dark:bg-white text-white dark:text-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {/* <span className="text-primary">Samachar</span>{' '} */}
              <span className="text-gray-400 dark:text-gray-600">Samachar Vichaar Vyapaar</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Be in the know</h2>
            <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-600 mb-8">
              From Sports to Entertainment, Economy, Finance and more. Keep an eye on events in your field of interest.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-[300px] h-[600px]">
            <div className="absolute inset-0 bg-gray-800 dark:bg-gray-200 rounded-[2.5rem] p-2">
              <div className="h-full w-full bg-white dark:bg-gray-900 rounded-[2.3rem] overflow-hidden">
                <div className="p-4 bg-gray-100 dark:bg-gray-800 flex items-center space-x-4">
                  <ArrowLeft className="h-6 w-6 text-gray-900 dark:text-white" />
                  <h3 className="text-lg font-semibold flex-grow text-gray-900 dark:text-white">News</h3>
                  <Search className="h-6 w-6 text-gray-900 dark:text-white" />
                </div>
                <div className="p-4 space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Breaking News</h4>
                  <Card className="bg-white dark:bg-gray-800">
                    <CardHeader>
                      <CardTitle className="text-sm text-gray-900 dark:text-white">India to resume playing bilateral cricket series against Pakistan in 2024?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs text-gray-600 dark:text-gray-400">The India-Pakistan cricket rivalry is one of the most intense in sports, often likened to El Clásico in cricket. This rivalry is highlighted by the fact that India has won 10 ICC tournaments, while Pakistan ...read more</p>
                    </CardContent>
                  </Card>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Top 3 events</h4>
                    <Card className="mb-2 bg-white dark:bg-gray-800">
                      <CardContent className="p-2 text-xs">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full mr-2"></span>
                          <div>
                            <p className="text-gray-900 dark:text-white">Will 2024 be recorded as the hottest year on record by NASA?</p>
                            <div className="flex space-x-2 mt-1">
                              <span className="text-green-500 dark:text-green-400">Yes 68</span>
                              <span className="text-red-500 dark:text-red-400">No 32</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-gray-800">
                      <CardContent className="p-2 text-xs">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-2"></span>
                          <div>
                            <p className="text-gray-900 dark:text-white">Air India - Vistara to function as a single airline by the end of the year?</p>
                            <div className="flex space-x-2 mt-1">
                              <span className="text-green-500 dark:text-green-400">Yes 55</span>
                              <span className="text-red-500 dark:text-red-400">No 45</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}