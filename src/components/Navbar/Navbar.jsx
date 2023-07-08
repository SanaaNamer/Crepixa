import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Navbar = () => {
  const items = [
    { id: 1, items: "PORTFOLILO", href: "#" },
    { id: 2, items: "SERVICES", href: "#" },
    { id: 3, items: "STORE", href: "#" },
    { id: 4, items: "BLOG", href: "#" },
    { id: 5, items: "ABOUT", href: "#" },
    { id: 6, items: "CONTACT", href: "#" },
  ]

  const [dropDownMenu, setDropDownMenu] = useState(false)
  const openDropDown = () => {
    setDropDownMenu(!dropDownMenu)
  }
  const [userdropDownMenu, setUserDropDownMenu] = useState(false)
  const openUserDropDown = () => {
    setUserDropDownMenu(!userdropDownMenu)
  }
  return (
    <div className='flex bg-black pl-20 pb-4'>
      <div className='logo mt-5 mr-12'>
        <Image
          src='assets/crepixaicon.svg'
          alt='Logo'
          width={100}
          height={100}
        />
      </div>
      <ul className='flex gap-4 mt-6'>
        {items.map((item) => (
          <li key={item.id} className='font-poppinsBlack text-stone-50'>
            <Link href={item.href}> {item.items}</Link>
          </li>
        ))}
      </ul>

      <div className='relative text-left justify-center ml-12 mt-3'>
        <button
          type='button'
          className='text-white  focus:border-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center'
          onClick={openDropDown}
        >
          <Image
            src='assets/language.svg'
            alt='Logo'
            width={15}
            height={15}
            className='flex'
          />
          <span className='text-yellow-300 ml-1 text-xs flex'>EN</span>
          <Image
            src='assets/yellowdownarrow.svg'
            alt='Logo'
            width={10}
            height={10}
            className='flex ml-1'
          />
        </button>
        {/* <div
          className=' z-50 list-none border-none border-amber-300 border-2 rounded bg-green-600  '
          
        > */}
        {dropDownMenu && (
          // <div className='m-5  bg-red-700 ' id='dropdown'>
          <ul className='fixed text-white text-sms bg-black w-24 p-3 rounded border-2 border-amber-300 border-solid'>
            <li className='border-b-2 border-amber-300 py-1'>
              <button>English</button>
            </li>
            <li className='border-b-2   outline-8 border-amber-300 py-1 '>
              <button> Arabic</button>
            </li>
            <li className='border-b-2    outline-8 border-amber-300 py-1'>
              <button>German</button>
            </li>
            <li className='py-1'>Fransh</li>
          </ul>
          // </div>
        )}
        {/* </div> */}
      </div>
      <div className='mt-5 ml-6'>
        <Image
          src='assets/cart.svg'
          alt='Logo'
          width={25}
          height={25}
          className='flex ml-1'
        />
      </div>

      <div className=' mt-6 ml-9 '>
        <button onClick={openUserDropDown}>
          <Image
            src='assets/user.svg'
            alt='Logo'
            width={18}
            height={19}
            className='flex ml-1'
          />
        </button>

        <div className=''>
          {userdropDownMenu && (
            <ul className='fixed text-white  mt-1 right-44 bg-black  text-sms w-24 p-3  rounded border-2 border-amber-300 border-solid'>
              <li className='border-b-2     border-amber-300 py-1'>
                <button>User Name</button>
              </li>
              <li className='border-b-2   border-amber-300 py-1'>
                <button>Profile</button>
              </li>
              <li className=''>
                <button>Log out</button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className='mt-4 ml-9 text-white'>
        <button className='text-black bg-amber-300 rounded-full px-7 py-2'>
          Price offer
        </button>
      </div>
    </div>
  )
}

export default Navbar
