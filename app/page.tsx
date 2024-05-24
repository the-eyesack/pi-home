'use client'
import Image from "next/image";
import {useEffect, useState} from 'react';
import {paytone_one} from '@/app/fonts';
import moment from 'moment';
import dynamic from 'next/dynamic'

const DynamicTime = dynamic(() => import('@/app/components/time'), {ssr: false})

export default function Home() {
  const [apodPic, setApodPic] = useState();
  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=c75M87HQeRMmEDKRDKsmWCeiMjSnBbaFDHYIHQG8')
    .then(response => response.json())
    .then(data => setApodPic(data.url))
  },[])

  return (
      <section>
          <h1 className={`${paytone_one.className} absolute text-white text-2xl text-center left-1/2 -translate-x-1/2`}>Good
              morning, Isaac.</h1>
          <DynamicTime/>
          <p className={`${paytone_one.className} absolute left-1/2 -translate-x-1/2 text-white top-1/2 -translate-y-1/2 text-5xl`}
             id={'clock'}></p>

          <p className={`${paytone_one.className} w-[480px] text-center absolute text-white top-3/4 -translate-y-1/2 text-xl`}>{moment().format('dddd, MMMM Do YYYY')}</p>

          <div className={'absolute text-white text-center bottom-2 w-[480px]'}><a href={'/bus'}>Bus</a></div>


          <img alt='apod' src={apodPic} className={'h-[320px] w-[480px]'}/>

      </section>

  );
}
