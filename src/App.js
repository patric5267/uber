// import './App.css';
import './App.css'
import { IoIosArrowDown } from "react-icons/io";
import { SiWebmoney } from "react-icons/si";
import { CgMenuGridR } from "react-icons/cg";
import { IoMenu } from "react-icons/io5";
import { FaCar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { FaKey } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from 'react';

function App() {
  const [f1, setF1] = useState(true)
  const [f2, setF2] = useState(false)
  const [f3, setF3] = useState(false)
  const [l1, setL1] = useState('initial')
  const [l2, setL2] = useState('hidden')
  const [l3, setL3] = useState('hidden')
  const[dis , setDis] = useState('none')
  const[back , setBack] = useState('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2880,h_1288/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png')
  const ride = () => {
    setF2(false)
    setF1(true)
    setF3(false)
    setL1('initial')
    setL3('hidden')
    setL2('hidden')
    setBack('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2880,h_1288/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png')
  }
  const drive = () => {
    setF2(true)
    setF1(false)
    setF3(false)
    setL2('initial')
    setL1('hidden')
    setL3('hidden')
    setBack('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2880,h_1334/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png')
  }
  const money = () => {
    setF2(false)
    setF1(false)
    setF3(true)
    setL2('hidden')
    setL1('hidden')
    setL3('initial')
    setBack('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_2880,h_1246/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg')
  }
  return (
    <>
      <header>
        <nav className=' bg-black text-white py-4 flex justify-between px-5 xl:px-10 w-full'>
          <ul className="leftnav flex items-center">
            <li className=' mr-6 font-normal text-xl xl:text-2xl'>Uber</li>
            <li className='   items-center mr-6 font-medium hidden xl:flex hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl' onClick={dis==='none'?()=> setDis('block') :()=> setDis('none')}>
              <p>Company</p>
              <IoIosArrowDown className=' ml-2' />
            </li>
            <li className=' mr-6 font-medium hidden xl:block hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl  '>Safety</li>
            <li className=' mr-6 font-medium hidden xl:block hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl '>Help</li>
          </ul>
          <ul className="rightnav flex items-center">
            <li className='  items-center mr-6 font-medium hidden xl:flex hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl '>
              <SiWebmoney className='  mr-2' />
              <p>EN</p>
            </li>
            <li className='  items-center mr-6 font-medium hidden xl:flex hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl '>
              <CgMenuGridR className='  text-lg mr-2' />
              <p>Products</p>
            </li>
            <li className=' font-medium text-sm hover:bg-[#676464] hover:cursor-pointer px-2 py-2 rounded-3xl'>
              <button>Log In</button>
            </li>
            <li className=' ml-3 xl:ml-6'>
              <button className=' bg-white text-black font-medium text-sm px-3 py-2 rounded-2xl'>
                Sign Up
              </button>
            </li>
            <li className=' ml-3 xl:hidden'>
              <IoMenu className=' text-xl' />
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="firstsection w-full h-32 overflow-hidden xl:hidden">
          <ul className=' flex    h-full pt-5 border-r-0 border-l-0 border-t-0 border-gray-400 border-[1px] border-solid'>
            <li className=' flex flex-col items-center justify-between  ml-5    '>
              <div className=' flex flex-col items-center' onClick={ride}>
                <FaCar className=' text-xl' />
                <p className=' text-sm font-semibold mt-2'>Ride</p>
              </div>
              <div className=' w-20 bg-black h-1' style={{visibility:l1}}>

              </div>
            </li>
            <li className='flex flex-col items-center w-20 justify-between  ml-5  '>
              <div className=' flex flex-col items-center' onClick={drive}>
                <GiNetworkBars className=' text-xl' />
                <p className=' text-center drive text-sm font-semibold mt-2'>Drive or Deliever</p>
              </div>
              <div className=' w-20 bg-black h-1' style={{visibility:l2}}>

              </div>
            </li>
            <li className='flex flex-col items-center w-20 justify-between ml-5  '>
              <div className=' flex flex-col items-center' onClick={money}>
                <FaKey className=' text-xl' />
                <p className=' text-center text-sm font-semibold drive mt-2'>Rent your fleet</p>
              </div>
           <div className=' w-20 bg-black h-1' style={{visibility:l3}}>

              </div>
            </li>
          </ul>
        </section>
        <section className='thirdsection xl:hidden '>
          {f1 && <div className='requestaride '>
            <div className=" py-4 px-4 md:py-7  ">
              <h1 className=' text-4xl font-semibold md:text-5xl'>Request a ride now</h1>
              <form className=' py-6 relative '>
                <input type="text" className=' w-full mb-2  bg-gray-100 py-4 pl-8 outline-none' placeholder='Enter pickup location' />
                <input type="text" className=' w-full   bg-gray-100 py-4 pl-8 outline-none' placeholder='Enter destination' />
                <div className='map  w-7 h-[7.5rem] absolute top-6 flex flex-col justify-center items-center'>
                  <div className="c1 w-2 h-2 rounded-full border-black border-[1px] border-solid">

                  </div>
                  <div className="line w-[1px] h-20 bg-black">

                  </div>
                  <div className="c1 w-2 h-2 rounded-full border-black border-[1px] border-solid">

                  </div>
                </div>
              </form>
              <div className='  flex flex-col md:flex-row items-center'>
                <button className=' bg-black text-white w-full md:w-36 py-3 md:mr-3 rounded-lg font-semibold mb-4 md:mb-0'>Request now</button>
                <button className=' bg-gray-100 w-full py-3 md:w-36  rounded-lg font-semibold mb-2 md:mb-0'>Schedule for later</button>
              </div>
            </div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1536,h_864/v1653688635/assets/d1/1ffc67-97f4-469c-85ac-e18d1da3ae95/original/DotCom_Update_Rider_bg_med2x.jpg" alt="" className=' w-full ' />
          </div>}
          {f2 && <div className="driverseat ">
            <div className=" py-4 px-4 md:py-7">
              <h1 className=' text-4xl md:text-5xl font-semibold'>Get in the driver's seat and get paid</h1>
              <p className=' my-5  pr-14 text-gray-600'>Drive on the platform with the largest network of active riders</p>
              <div className='  md:flex items-center'>
                <button className=' bg-black md:mr-4 text-white px-4 py-2 rounded-lg font-medium'>Sign up to drive</button>
                <div className=' my-3'>
                  <p className='text-gray-600'>Learn more about driving and delievering</p>
                </div>

              </div>
            </div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_640,h_480/v1653688539/assets/ae/d8db42-6e67-4c9e-9741-1c7503a1983c/original/DotCom_Update_Earner_bg_sml2x.jpg" alt="" className=' w-full' />
          </div>}
          {f3 && <div className="makemoney ">
            <div className=" py-4 px-4 md:py-7">
              <h1 className=' text-4xl font-semibold md:text-5xl'>Make money by renting out your car</h1>
              <p className=' my-5'>Connet with thousands of drivers and earn more per week with Uber's free fleet management tools</p>
              <button className=' bg-black py-2 px-4 text-white rounded-lg'>Get Started</button>
            </div>
            <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_640,h_480/v1677102595/assets/66/2853af-061f-4176-8c6b-f2ddef091599/original/UberIM_002309-%281%29.jpg" alt="" className=' w-full' />
          </div>}
          <div className='buildings px-4 py-7 '>
            <h1 className=' text-3xl font-bold'>The Uber you know reimagined for business</h1>
            <p className=' my-4'>A platform for managing global rides and meals , and local deliveries, for companies of any size</p>
            <button className=' bg-black py-2 px-4 w-28 text-white rounded-lg'>Get Started</button>
          </div>
        </section>
        <section className=' forxlsize hidden xl:block pl-16 py-10 relative' style={{backgroundImage:`url(${back})`}}>
          <div className=' bg-white w-[35rem] py-4'>
            <ul className=' flex justify-evenly h-32 pt-5 border-r-0 border-l-0 border-t-0 border-gray-400 border-[1px] border-solid'>
              <li className=' flex flex-col items-center justify-between     '>
                <div className=' flex flex-col items-center cursor-pointer' onClick={ride}>
                  <FaCar className=' text-2xl' />
                  <p className=' text-sm font-semibold mt-2'>Ride</p>
                </div>
                <div className=' w-20 bg-black h-1' style={{visibility:l1}}>

                </div>
              </li>
              <li className='flex flex-col items-center w-20 justify-between    '>
                <div className=' flex flex-col items-center cursor-pointer' onClick={drive}>
                  <GiNetworkBars className=' text-2xl' />
                  <p className=' text-center drive text-sm font-semibold mt-2'>Drive or Deliever</p>
                </div>
                <div className=' w-20 bg-black h-1' style={{visibility:l2}}>

                </div>
              </li>
              <li className='flex flex-col items-center w-20 justify-between   '>
                <div className=' flex flex-col items-center cursor-pointer' onClick={money}>
                  <FaKey className=' text-2xl' />
                  <p className=' text-center text-sm font-semibold drive mt-2'>Rent your fleet</p>
                </div>
                <div className=' w-20 bg-black h-1' style={{visibility:l3}}>

                </div>
              </li>
            </ul>
          {f1 &&   <div className='requestaride '>
              <div className=" py-4 px-12  md:py-7  ">
                <h1 className=' text-4xl font-semibold md:text-5xl'>Request a ride now</h1>
                <form className=' py-6 relative '>
                  <input type="text" className=' w-full mb-2  bg-gray-100 py-4 pl-8 outline-none' placeholder='Enter pickup location' />
                  <input type="text" className=' w-full   bg-gray-100 py-4 pl-8 outline-none' placeholder='Enter destination' />
                  <div className='map  w-7 h-[7.5rem] absolute top-6 flex flex-col justify-center items-center'>
                    <div className="c1 w-2 h-2 rounded-full border-black border-[1px] border-solid">

                    </div>
                    <div className="line w-[1px] h-20 bg-black">

                    </div>
                    <div className="c1 w-2 h-2 rounded-full border-black border-[1px] border-solid">

                    </div>
                  </div>
                </form>
                <div className='  flex flex-col md:flex-row items-center'>
                  <button className=' bg-black text-white w-full md:w-36 py-3 md:mr-3 rounded-lg font-semibold mb-4 md:mb-0'>Request now</button>
                  <button className=' bg-gray-100 w-full py-3 md:w-36  rounded-lg font-semibold mb-2 md:mb-0'>Schedule for later</button>
                </div>
              </div>

            </div> }
           {f2 &&  <div className="driverseat ">
              <div className=" py-4 px-12 md:py-7">
                <h1 className=' text-4xl md:text-5xl font-semibold'>Get in the driver's seat and get paid</h1>
                <p className=' my-5  pr-14 text-gray-600'>Drive on the platform with the largest network of active riders</p>
                <div className='  md:flex items-center'>
                  <button className=' bg-black md:mr-4 text-white px-4 py-2 rounded-lg font-medium'>Sign up to drive</button>
                  <div className=' my-3'>
                    <p className='text-gray-600'>Learn more about driving and delievering</p>
                  </div>

                </div>
              </div>

            </div> }
           {f3 && <div className="makemoney ">
              <div className=" py-4 px-12 md:py-7">
                <h1 className=' text-4xl font-semibold md:text-5xl'>Make money by renting out your car</h1>
                <p className=' my-5'>Connet with thousands of drivers and earn more per week with Uber's free fleet management tools</p>
                <button className=' bg-black py-2 px-4 text-white rounded-lg'>Get Started</button>
              </div>

            </div> }
          </div>
          <div className='list bg-white    absolute top-0 left-32 hidden text-gray-400' style={{display:dis}}>
            <ul className=' '>
              <li className='  px-5 py-2  hover:bg-gray-200 '>About Us</li>
              <li className='  px-5 py-2  hover:bg-gray-200 '>Our offerings</li>
              <li className='  px-5 py-2 hover:bg-gray-200 '>How Uber works</li>
              <li className='  px-5 py-2 hover:bg-gray-200'>Global citizenship</li>
              <li className='  px-5 py-2 hover:bg-gray-200'>Newsroom</li>
              <li className='  px-5 py-2 hover:bg-gray-200'>Investores Relations</li>
              <li className='  px-5 py-2 hover:bg-gray-200'>Blog</li>
              <li className='  px-5 py-2 hover:bg-gray-200'>Careers</li>
            </ul>
          </div>
        </section>
        <div className=' w-full hidden    xl:flex xl:justify-center'>
          <div className="buildings   w-full flex flex-col justify-center pl-16">
            <h1 className=' text-4xl font-bold'>The Uber you know reimagined for business</h1>
            <p className=' my-6'>A platform for managing global rides and meals , and local deliveries, for companies of any size</p>
            <button className=' bg-black py-3 w-36 font-semibold text-white rounded-lg'>Get Started</button>
          </div>
        </div>
        <section className='fourthsection  py-6 xl:py-9  px-5 xl:px-0 lg:flex lg:justify-center'>
          <div className=' '>
            <h1 className=' font-semibold text-3xl xl:text-4xl '>Focused on safety, wherever you go</h1>
            <div className=' mt-6 sm:flex sm:justify-evenly xl:justify-center  '>
              <div className='  sm:w-[21rem] md:w-[30rem] xl:w-[35rem] sm:pr-4 xl:pr-0 '>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_544,h_362/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png" alt="" />
                <h2 className=' text-xl font-medium my-3'>Our commitment to your safety</h2>
                <p className=' text-gray-600'>With every safety feature and every standard in our Community Guidelines, we're committed to helping to create a safe environment for our users.</p>
                <p className=' underline text-gray-600 text-lg my-3'>Read about our Community Guidelines</p>
                <p className=' underline text-gray-600 text-lg my-3'>See all safety features</p>
              </div>
              <div className=' my-7 sm:my-0 0 sm:w-[21rem] sm:pl-4 xl:w-[35rem]  md:w-[30rem]'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_544,h_362/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png" alt="" />
                <h2 className=' text-xl font-medium my-3'>Setting 10,000+ cities in motion</h2>
                <p className=' text-gray-600'>The app is available in thousands of cities worldwide, so you can request a ride even when you’re far from home.</p>
                <p className=' underline text-gray-600 text-lg my-3'>View all cities</p>
              </div>
            </div>
          </div>
        </section>
        <section className="fisthsection lg:flex lg:justify-center ">
          <div
            className=" px-5 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:w-[60rem] xl:w-[70rem]">
            <div className=' sm:pr-6 '>
              <IoMdPeople className=' text-lg' />
              <h2 className=' font-medium text-lg my-3'>About us</h2>
              <p className=' text-gray-600'>Find out how we started, what drives us, and how we’re reimagining how the world moves.</p>
              <p className=' underline text-gray-600 mt-5'>Learn more about Uber</p>
            </div>
            <div className=' mt-8 sm:mt-0 '>
              <IoNewspaperOutline className=' text-lg' />
              <h2 className=' font-medium text-lg my-3'>Newsroom</h2>
              <p className=' text-gray-600'>See announcements about our latest releases, initiatives, and partnerships.</p>
              <p className=' underline text-gray-600 mt-5'>Go to Newsroom</p>
            </div>
            <div className=' mt-8 sm:pr-6 '>
              <IoHomeOutline className=' text-lg' />
              <h2 className=' font-medium text-lg my-3'>Global citizenship</h2>
              <p className=' text-gray-600'>Read about our commitment to making a positive impact in the cities we serve.</p>
              <p className=' underline text-gray-600 mt-5'>See our partnerships</p>
            </div>

          </div>
        </section >
        <section className='sixthsection my-10 px-5 lg:flex lg:justify-center xl:mt-16'>
          <div className='lg:w-[60rem] xl:w-[70rem]'>
            <h1 className=' font-semibold text-3xl xl:text-4xl xl:font-bold'>Ride with Uber</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2'>
              <div className=' flex mt-10 xl:mr-4'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914471/assets/89/8e4239-5e7d-4de7-bf71-00cc32d468db/original/Auto-150X150p4x.png" alt="" className=' w-20  h-20 xl:w-24 xl:h-24 mr-4  ' />
                <div className=' flex items-center     '>
                  <div className='  '>
                    <h2 className=' font-bold  text-2xl'>Uber Auto</h2>
                    <p className='  text-gray-500 xl:text-lg'>Get affordable uber Auto rides with no haggling. Request uber Auto and ride comfortably around your city</p>
                  </div>
                  <FaArrowRight className=' text-xl font-bold w-24  ' />
                </div>
              </div>
              <div className=' flex mt-10 xl:mr-4'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_168,h_168/v1649914539/assets/86/82f8b3-e2e6-45f8-a8f7-fdc511f709e0/original/Moto-150X150p4x.png" alt="" className=' w-20  h-20 mr-4 xl:w-24 xl:h-24  ' />
                <div className=' flex items-center     '>
                  <div className='  '>
                    <h2 className=' font-bold  text-2xl'>Uber Moto</h2>
                    <p className=' text-gray-500 xl:text-lg '>Get affordable bike rides at your doorstep. Skip the crowd and zip through traffic with Uber Moto</p>
                  </div>
                  <FaArrowRight className=' text-xl font-bold w-24  ' />
                </div>
              </div>
              <div className=' flex mt-10 xl:mr-4'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_168,h_168/v1630531077/assets/38/494083-cc23-4cf7-801c-0deed7d9ca55/original/uber-hourly.png" alt="" className=' w-20  h-20 mr-4 xl:w-24 xl:h-24  ' />
                <div className=' flex items-center     '>
                  <div className='  '>
                    <h2 className=' font-bold  text-2xl'>Uber Rentals</h2>
                    <p className='  text-gray-500 xl:text-lg'>Book Rentals to save time with one car and driver for yuor multistops trips</p>
                  </div>
                  <FaArrowRight className=' text-xl font-bold w-24  ' />
                </div>
              </div>
              <div className=' flex mt-10 xl:mr-4'>
                <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1649914597/assets/f7/7f583f-447a-4cf7-8da6-6ad254f0a66b/original/Intercity-150X150p4x.png" alt="" className=' w-20  h-20 mr-4  xl:w-24 xl:h-24 ' />
                <div className=' flex items-center justify-between   '>
                  <div className='  '>
                    <h2 className=' font-bold  text-2xl'>Uber Intercity</h2>
                    <p className=' text-gray-500 xl:text-lg '>Book Intercity to head outstation in convenient and affordable cars</p>
                  </div>
                  <FaArrowRight className=' text-xl font-bold w-24  ' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="seventh px-5 lg:flex lg:justify-center bg-gray-100 py-10">
          <div className='lg:w-[60rem] xl:w-[70rem]'>
            <h1 className=' font-semibold text-3xl xl:text-4xl'>It's easier in the apps</h1>
            <div className=' xl:flex xl:justify-between  '>
              <div className='uber py-4 px-4 flex items-center justify-between mt-4 lg:mt-10  bg-white'>
                <div className=' flex  items-center'>
                  <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_168,h_168/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg" alt="" className=' w-20 h-20 xl:w-40 xl:h-40' />
                  <h2 className=' font-semibold text-3xl xl:text-4xl mx-3'>Download the Uber app</h2>
                </div>
                <FaArrowRight className=' text-3xl arrow   ' />
              </div>
              <div className='uber py-4 px-4 flex xl:ml-4 items-center justify-between mt-4 lg:mt-10  bg-white'>
                <div className=' flex  items-center'>
                  <img src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_168,h_168/v1690810558/assets/e2/4f1914-1e23-4896-ad77-22e88c37c2f9/original/Rider-App-Icon_iOS.svg" alt="" className=' w-20 h-20 xl:w-40 xl:h-40' />
                  <h2 className=' font-semibold text-3xl xl:text-4xl mx-3'>Download the Driver app</h2>
                </div>
                <FaArrowRight className=' text-3xl arrow ' />
              </div>
            </div>
          </div>

        </section>
        <section className='eight px-5 py-20 lg:flex lg:justify-center'>
          <div className=' md:flex md:justify-between lg:w-[60rem] xl:w-[70rem] '>
            <div className='md:w-[50%]   flex justify-between items-center  pb-5 border-t-0 border-r-0 border-l-0 border-black border-[1px] border-solid'>
              <h2 className=' pr-28 text-3xl font-semibold xl:text-4xl '>Sign up to drive</h2>
              <FaArrowRight className=' text-3xl arrow   ' />
            </div>
            <div className='md:w-[50%]  md:ml-2 lg:ml-7  flex mt-7 md:mt-0 justify-between items-center  pb-5 border-t-0 border-r-0 border-l-0 border-black border-[1px] border-solid'>
              <h2 className=' text-3xl md:pr-28 font-semibold xl:text-4xl '>Sign up to ride</h2>
              <FaArrowRight className=' text-3xl arrow   ' />
            </div>
          </div>

        </section>
      </main>
      <footer className=' py-10 bg-black text-white px-5 lg:flex lg:flex-col lg:items-center'>
        <div className='lg:w-[60rem] xl:w-[70rem]'>
          <div className=' '>
            <h2 className=' text-lg'>Uber</h2>
            <p className=' mt-5  text-lg'>Visit Help Center</p>
            <div className=' sm:grid sm:grid-cols-2 xl:grid-cols-4'>
              <div className=' mt-7'>
                <h2 className=' my-4 text-lg'>Company</h2>
                <ul className='  text-sm'>
                  <li>About us</li>
                  <li className='my-3 '>Our offerings</li>
                  <li className='my-3 '>Newsroom</li>
                  <li className='my-3 '>Investors</li>
                  <li className='my-3 '>Blog</li>
                  <li className='my-3 '>Careers</li>
                  <li className='my-3 '>AI</li>
                  <li className='my-3 '>Gift cards</li>
                </ul>
              </div>
              <div className=' mt-7'>
                <h2 className=' my-4 text-lg'>Products</h2>
                <ul className='  text-sm'>
                  <li className='my-3 '> Ride</li>
                  <li className='my-3 '>Drive</li>
                  <li className='my-3 '>Deliver</li>
                  <li className='my-3 '>Eat</li>
                  <li className='my-3 '>Uber for Business</li>
                  <li className='my-3 '>Uber Freight</li>
                </ul>
              </div>
              <div className=' mt-7'>
                <h2 className=' my-4 text-lg'>Global citizenship</h2>
                <ul className='  text-sm'>
                  <li className='my-3 '>Safety</li>
                  <li className='my-3 '>Diversity and inclusion</li>
                </ul>
              </div>
              <div className=' mt-7'>
                <h2 className=' my-4 text-lg'>Travel</h2>
                <ul className='  text-sm'>
                  <li className='my-3 '>Reserve</li>
                  <li className='my-3 '>Airports</li>
                  <li className='my-3 '>Cities</li>
                </ul>
              </div>
            </div>
            <div className="socialicons my-10">
              <ul className=' flex '>
                <li className='mr-6 sm:mr-10'><FaFacebook className=' text-lg' /></li>
                <li className='mr-6 sm:mr-10'><FaSquareInstagram className=' text-lg' /></li>
                <li className='mr-6 sm:mr-10'><FaTwitter className=' text-lg' /></li>
                <li className='mr-6 sm:mr-10'><FaYoutube className=' text-lg' /></li>
                <li className='mr-6 sm:mr-10'><FaLinkedin className=' text-lg' /></li>
              </ul>
            </div>
          </div>
          <div className="language">
            <ul>
              <li className=' flex items-center'>
                <MdLanguage />
                <p className=' ml-2 font-medium'>English</p>
              </li>
              <li className=' flex items-center mt-3'>
                <HiLocationMarker />
                <p className=' ml-2 font-medium'>Delhi NCR</p>
              </li>
            </ul>
          </div>
          <div className="playstore mt-10 flex">
            <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-google-4d63c31a3e.svg" alt="" className=' w-28' />
            <img src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg" alt="" className=' w-28 ml-2' />
          </div>
          <div className=' mt-10'>
            <p className=' text-sm text-gray-400'>@ 2023 Uber Technogies Inc.</p>
          </div>
          <div className="terms text-sm lg:text-lg text-gray-400 mt-10">
            <ul className=' flex'>
              <li className=' mr-6'>Privacy</li>
              <li className=' mr-6'>Accessibility</li>
              <li className=' mr-6'>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </>

  );
}

export default App;
