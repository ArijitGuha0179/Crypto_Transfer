
import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { TransactionContext } from '../../context/TransactionContext'
import Modal from 'react-modal';

import { RiSettings3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import ethLogo from '../../assets/eth.png'
import { useRouter } from 'next/router';
import TransactionLoader from '../transactionLoader'


Modal.setAppElement('#__next')

const style = {
  wrapper: `w-screen flex items-center justify-center mt-14`,
  content: `bg-[#0A192F] w-[40rem] rounded-2xl p-4`,
  formHeader: `px-2 flex items-center justify-between font-semibold text-xl text-[#CCD6F6]`,
  transferPropContainer: `bg-[#112240] my-3 rounded-2xl p-6 text-3xl border border-[#112240] hover:border-[#64FFDA] flex justify-between`,
  transferPropInput: `bg-transparent placeholder:text-[#8892B0] outline-none mb-6 w-full text-2xl text-[#CCD6F6]`,
  currencySelector: `flex w-1/4`,
  currencySelectorContent: `w-full h-min flex justify-between items-center bg-[#233554] hover:bg-[#1D3557] rounded-2xl text-xl font-medium cursor-pointer p-2 mt-[-0.2rem] text-[#CCD6F6]`,
  currencySelectorIcon: `flex items-center`,
  currencySelectorTicker: `mx-2`,
  currencySelectorArrow: `text-lg`,
  confirmButton: `bg-[#FCA311] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#FCA311] hover:border-[#64FFDA] text-[#0A192F]`,
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#0A192F',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(10, 25, 47, 0.75)',
  },
}


export default function Main() {
  const {formData, handleChange, sendTransaction} = useContext(TransactionContext)
  const router = useRouter();

  const handleSubmit = async (e) => {
    const { addressTo, amount } = formData
    e.preventDefault()

    if(!addressTo || !amount) return

    sendTransaction()
  }

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.formHeader}>
          <div>Transfer</div>
          <div>
            <RiSettings3Fill />
          </div>
        </div>
        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0.00"
            pattern="^[0-9]*[.,]?[0-9]*$"
            onChange={(e) => handleChange(e, 'amount')}
          />
          <div className={style.currencySelector}>
            <div className={style.currencySelectorContent}>
              <div className={style.currencySelectorIcon}>
                <Image src={ethLogo} width={20} height={20} />
              </div>
              <div className={style.currencySelectorTicker}>ETH</div>
              <AiOutlineDown className={style.currencySelectorArrow} />
            </div>
          </div>
        </div>

        <div className={style.transferPropContainer}>
          <input
            type="text"
            className={style.transferPropInput}
            placeholder="0x..."
            onChange={(e) => handleChange(e, 'addressTo')}
          />
          <div className={style.currencySelector}></div>
        </div>

        <div onClick={(e) => handleSubmit(e)} className={style.confirmButton}>
          Confirm
        </div>

      </div>
      <Modal isOpen={!!router.query.loading} style={customStyles}>
         <TransactionLoader />
      </Modal>
    </div>
  )
}