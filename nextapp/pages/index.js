
import Header from '../components/header'
import Main from '../components/main'
import TransactionHistory from '../components/transactionHistory'

const style = {
  wrapper: 'h-screen max-h-screen h-min-screen w-screen bg-[#0A192F] text-[#CCD6F6] select-none flex flex-col justify-between',
}

const Home = () => {

  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <TransactionHistory />
    </div>
  )
}

export default Home
