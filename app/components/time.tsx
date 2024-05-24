import {paytone_one} from '@/app/fonts';
import moment from 'moment/moment';

export default function Time() {
	function updateClock() {
		const now = moment();
		const clock = window.document.getElementById('clock');
		if (clock) {
			clock.innerHTML = now.format('H:mm:ss');
		}
	}
	setInterval(updateClock, 1000);
	return (
		<p className={`${paytone_one.className} absolute left-1/2 -translate-x-1/2 text-white top-1/2 -translate-y-1/2 text-5xl`}
		   id={'clock'}></p>
	)
}
