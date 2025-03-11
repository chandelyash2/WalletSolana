import { BgRecoveryPhrase } from '../../assets';


const WalletBoard:React.FC = ()=> {
    return(
        <div
        className="flex flex-col items-center justify-center w-full max-w-[375px] h-screen min-h-[600px] max-h-[600px] bg-no-repeat bg-cover bg-center rounded-xl gap-8 text-white"
        style={{ backgroundImage: `url(${BgRecoveryPhrase})` }}
      >
        USER DASHBORD
      </div>
    )
}

export default WalletBoard;