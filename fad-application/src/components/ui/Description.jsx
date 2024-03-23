import { Button } from "@/components/ui/button"

export default function Description(){
    return(
        <>
            <div className="text-white px-12 py-12 flex flex-col space-y-5 w-full xl:w-3/5">
                <span className="text-4xl font-[500] font-roboto">WHY FINE ARTS ADVERTISING?</span>
                <span className="text-3xl font-ebgaramond font-normal">Graduates of the Bachelor of Fine Arts are envisioned to be advertising artists</span>
                <span className="text-md font-[200] font-roboto">The Fine Arts Department program is focused on the advancement of the ability to use traditional and current technologies to create effective advertising, publishing, editorial, corporate information, websites, and multimedia designs.</span>
                <Button className="text-white bg-learnmore-btn rounded hover:bg-white w-40 font-roboto">Learn More</Button>
            </div>
        </>
    )
}