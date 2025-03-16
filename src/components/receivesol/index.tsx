import DashboardLayout from '../dashboardLayout/index'
import qr from '../../assets/icons/qr.png'
import warning from '../../assets/icons/warning-2.svg'

function ReceiveSol() {
	return (
		<DashboardLayout title='Receive SOL' showButton={true} btntitle="Copy">
			<div className='flex flex-col items-center justify-center' style={{ paddingTop: '62px' }}>
				<img src={qr} alt='imgs' className='w-[213px] h-[213px]' />
				<p className='text-[14px]font-semi text-[#fff] w-full max-w-[301px] m-auto whitespace-normal break-words text-center' style={{ padding: '15px 0 50px 0' }}>8kYZyxeW3kFmucN7TLNT7fFKeDnNV8AEFBA8EF4yLWA</p>
				<div className='flex gap-[5px]'> <img src={warning} alt='imgs' className='w-[18px] h-[18px]' /> <span className='text-[#9D9EA4] text-[10px]'>Please make sure that only SOL deposit is made via this address. Otherwise, your funds will not be added to available balance - nor will it be refunded</span></div>
			</div>
		</DashboardLayout>
	)
}

export default ReceiveSol