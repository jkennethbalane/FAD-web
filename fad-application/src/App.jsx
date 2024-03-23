import { useState } from 'react'
import vid from './components/ui/assets/ALUMNI.png'
import alumimg from './components/ui/assets/ALUMNI.png'
import eventimg from './components/ui/assets/EVENT.png'
import exhibitimg from './components/ui/assets/Exhibit.png'
import picture from './components/ui/assets/PLATE.png'
import './App.css'
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carousel className="w-full flex justify-center max-w-full">
        <CarouselContent>
          <CarouselItem key="0">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex max-w-full w-full">
                <div className='relative'>
                  <img src={vid}></img>
                  <div className='text-white py-3 px-6 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond w-3/5'>
                    <span className='text-2xs xl:text-3xl'>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES - MANILA</span>
                    <span className='text-lg xl:text-5xl'>FINE ARTS DEPARTMENT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="1">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={picture}></img>
                  <div className='text-white py-3 px-6 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond w-3/5'>
                    <span className='text-2xs xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-lg xl:text-5xl'>PLATES</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>

          <CarouselItem key="2">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={eventimg}></img>
                  <div className='text-white py-3 px-6 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond w-3/5'>
                    <span className='text-2xs xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-lg xl:text-5xl'>EVENTS</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="3">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={exhibitimg}></img>
                  <div className='text-white py-3 px-6 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond w-3/5'>
                    <span className='text-2xs xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-lg xl:text-5xl'>EXHIBIT</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
          <CarouselItem key="4">
          <div>
            <Card className="border-black">
              <CardContent className="p-0 bg-cover flex items-left justify-left flex">
                <div className='relative'>
                  <img src={alumimg}></img>
                  <div className='text-white py-3 px-6 absolute left-0 bottom-0 flex flex-col space-y-1 font-ebgaramond w-3/5'>
                    <span className='text-2xs xl:text-3xl'>FINE ARTS DEPARTMENT</span>
                    <span className='text-lg xl:text-5xl'>ALUMNI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default App
