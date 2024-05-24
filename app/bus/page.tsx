'use client'
import {useEffect, useState} from 'react';
import moment from 'moment';

export default function Page() {
	const [time, setTime] = useState<number[]>([])
	useEffect(() => {
		// @ts-ignore
		fetch(process.env.NEXT_PUBLIC_BUSINTIME)
			.then(response => response.json())
			.then(data => {
				let timeArr:number[] = []
				data.buses.map((bus: any) => {
					timeArr.push(bus.arrival_time)

				})
				setTime(timeArr)
			})
	}, []);

	console.log()
	// @ts-ignore
	return(
		<section>
			<a href={'/'} className={'absolute right-1'}>Home</a>
			<h1 className={'text-center font-bold text-5xl absolute w-[480px] top-1/2 -translate-y-1/2'}>{moment().to(time[0], true)}</h1>
			<p>Next Q28 to Flushing in...</p>
			<div className={"absolute bottom-2 w-[480px]"}>
			<p>Also in...</p>

			<div className={'flex justify-center'}>
				{time.map((bus, i) => {
					if (i != 0) return <p className={'inline px-2'} key={i}>{moment().to(bus, true)}</p>
				})}
			</div>
			</div>

		</section>
	)
}