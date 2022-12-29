import Head from 'next/head'
import Navbar from './../components/Navbar/Navbar.jsx'
import DefaultLayout from './../components/DefaultLayout/DefaultLayout.jsx'

export default function Home() {
  return (
    <DefaultLayout title='Gantari Mengwi 2023'>
      <section className='bg-home-1 h-screen w-full'>
        {/* <Navbar/> */}
        <div className='homeCover1  w-full h-full' >
          <div className='md:pt-[430px] pt-[250px]'>
          <h1 className='flex justify-center items-center text-white my-auto -translate-x-5 text-5xl'>Pesona</h1>
          <h1 className='flex justify-center items-center text-white my-auto translate-x-5 text-5xl'>Mengwi</h1>
          <h3 className='flex justify-center items-center text-white pt-2 text-xl'>KKN PPM UGM Periode 2 Tahun 2023</h3>
          <div className='mt-2 mx-auto h-[40px] w-[364px] rounded-[30px] bg-t-orange'>
            <p className='flex justify-center items-center pt-2 text-white'>Jelajahi Sekarang!</p>
          </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}
