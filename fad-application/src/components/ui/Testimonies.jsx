import { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

function Testimonies() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='py-6 font-roboto font-[400] text-black'>
            <div className='text-center flex flex-col space-y-3 font-[500]'>
                <span className="xl:text-3xl text-xl text-testimonialTitle ">Testimonials</span>
                <span className="xl:text-3xl text-xl">We taught thousands of<br></br>amazing students</span>
            </div>
            <Carousel className="w-full flex justify-center max-w-full px-6 py-6">
                <CarouselContent>
                    <CarouselItem key="0">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-2xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“I would say that being a TUPian was not an easy feat and a fine art student at that. Some would say that fine arts is an easy course. Some of my mates even chose to be a fine arts student because of that notion. But honestly, it wasn't. It takes a lot of grit and the never-ending explosion of ideas to continue with this course, especially in TUP. You have to be resourceful and could often feel like you are at your end wits. But at the end of the day, it's how we always stand up after crying our eyes out, wiping the tears from our cheeks, and moving on to our next plate; until The Pomp and Circumstance marches play that is.”</span>
                                </div>
                                <div>
                                    <span>Patricia Serrano<br></br></span>
                                    <span>Painting & 3D Artist</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="1">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“Marami akong nadiscover like building a connection. Kumuha lang talaga ako ng fine arts course kasi ayoko maging boring pagkatao ko and hindi ko rin aakalain na magiging career ko ito and 'yung opportunities na binigay ng TUP grinab ko na like art in the Park. It's cool kasi doon ako nakapag build ng connection. All throughout ng college life ko nakafocus sa career ko na mismo.”</span>
                                </div>
                                <div>
                                    <span>Poula Andrei Sitjar<br></br></span>
                                    <span>Painting</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="2">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-2xs h-80 rounded-xl space-y-5">
                                <div>
                                    <span>“As a student, may mga certain experiences na naging bahagi ng aking journey. One such moment for me was receiving a grade of 1.0 in our Anatomy subject, a challenging subject that tested my perseverance and resilience. Yet, kahit may mga academic trials, isa sa mga nag stand out as vibrant highlight ng aking pagiging Fine Arts Student ay ang pag participate sa mga various student art competitions. Not only did these events ignite yung aking creative passion, but they also provided the opportunity to forge connections with students from other schools. Yung friendship, nanganak lang from shared artistic endeavors, mga struggle when joing a competitions, na I think nag-enriched sa aming mga buhay with lasting fellowship and support.”</span>
                                </div>
                                <div>
                                    <span>Heraldo G. Corpus<br></br></span>
                                    <span>Visual Artist & Painting</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>

                    <CarouselItem key="3">
                    <div className='p-1'>
                        <Card className="flex justify-center border-none">
                            <CardContent className="flex flex-col bg-cardbg aspect-square font-[800] justify-between p-6 xl:h-[32rem] xl:text-base text-xs rounded-xl space-y-5">
                                <div>
                                    <span>“Being TUP fine arts student the education that they offer to me amplify my skills and shaped my personality to become professional with the help of our dear instructor that gives the true essence of having a practice to school to become equipped and ready for the real outside world.”</span>
                                </div>
                                <div>
                                    <span>John Cris Marquez<br></br></span>
                                    <span>Visual Artist & Freelance Photographer</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </div>
        <div className='py-6 px-12 font-roboto text-white'>
            <div className='text-center flex flex-col space-y-3 text-black'>
                <span className="xl:text-3xl text-xl font-[500]">Highlights</span>
                <span className="xl:text-3xl text-xs font-[300]">LATEST NEWS AND EVENTS</span>
            </div>
            <div className='flex xl:flex-row xl:space-y-0 space-y-6 py-6 justify-between flex-col'>
                <Card className="flex justify-center ">
                    <CardContent className="flex flex-col bg-[url('/src/components/ui/assets/indayog.png')] bg-cover aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0">
                        <div className="flex flex-col justify-end h-full w-full">
                            <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center'>
                                <span className='font-ebgaramond text-xl'>PINAKA-KAVOUGE NA BOOTH-TUP INDAYOG 2023</span>
                                <span className='font-roboto text-sm'>Learn More</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex justify-center">
                    <CardContent className="flex flex-col bg-[url('/src/components/ui/assets/LunetaArt.png')] bg-cover aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0">
                        <div className="flex flex-col justify-end h-full w-full">
                            <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center'>
                                <span className='font-ebgaramond text-xl'>Luneta Art Fair</span>
                                <span className='font-roboto text-sm'>Learn More</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex justify-center">
                    <CardContent className="flex flex-col bg-[url('/src/components/ui/assets/Dexter.png')] bg-cover aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0 ">
                        <div className="flex flex-col justify-end h-full w-full">
                            <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center'>
                                <span className='font-ebgaramond text-xl'>Meet Dexter Fernandez</span>
                                <span className='font-roboto text-sm'>Learn More</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="flex justify-center">
                    <CardContent className="flex flex-col bg-[url('/src/components/ui/assets/ArtInThePark.png')] bg-cover aspect-square h-80 transition duration-300 transform hover:scale-105 rounded-xl p-0">
                        <div className="flex flex-col justify-end h-full w-full">
                            <div className='px-6 py-2 bg-[#841E1C]/[.8] rounded-b-xl flex flex-col h-1/3 justify-center'>
                                <span className='font-ebgaramond text-xl'>Art in the Park at Jaime Velasquez Park</span>
                                <span className='font-roboto text-sm'>Learn More</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className='text-center flex flex-col space-y-0 py-6'>
                <span className="xl:text-3xl text-xs text-testimonialTitle">Want to connect with us?</span>
                <span className="xl:text-3xl text-md text-black">Visit our page for more.</span>
            </div>
        </div>
    </>
  )
}

export default Testimonies