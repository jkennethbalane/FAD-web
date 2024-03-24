import foot from './assets/Footer.png'
import facebook from './assets/Facebook.png'
import instagram from './assets/Instagram.png'
import mail from './assets/Letter.png'
import phone from './assets/Phone.png'

export default function Footer(){
    return(
        <>
            <div className="w-full h-80 xl:h-96 relative font-body font-[500]">
                <img src={foot} className='w-full object-cover h-full'></img>
                <div className='text-white py-3 px-6 absolute left-0 top-0 flex flex-col space-y-10'>
                    <div>
                        <span className='text-4xl xl:text-5xl'>CONNECT<br/>WITH US</span>
                        <div className='flex flex-row space-x-5'>
                            <img src={facebook} className='transition duration-300 transform hover:scale-105'></img>
                            <img src={instagram} className='transition duration-300 transform hover:scale-105'></img>
                        </div>
                    </div>
                    <div>
                        <div className='flex flex-col text-3xs'>
                            <span>TECHNOLOGICAL UNIVERSITY OF THE PHILIPPINES - MANILA</span>
                            <span>Ayala Boulevard, Ermita, Manila, Philippines, 1000 </span>
                        </div>
                        <div>
                            <div className='flex flex-row items-center space-x-5'>
                                <img src={mail} className='transition duration-300 transform hover:scale-105'></img>
                                <span className='text-3xs'>tup_fineartsdepartment@tup.edu.ph</span>
                            </div>
                            <div className='flex flex-row items-center space-x-5'>
                                <img src={phone} className='transition duration-300 transform hover:scale-105'></img>
                                <span className='text-3xs'>09326587416</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center bg-gradient-to-r from-[#0C0808] to-[#841E1C]'>
                <span className='text-[#8c8c8c] font-ebgaramond'>©2024 TUP-FAD. ALL RIGHTS RESERVE</span>
            </div>
        </>
    )
}