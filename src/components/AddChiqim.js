import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addChiqim} from '../store/chiqim'

 function AddChiqim({add, length, isOpen, statefoyda, stateKassa}) {
  const [foydal, setFoydal]=useState('')  
  const [miqdor, setMiqdor]= useState('')
  const [kassa, setKassa] = useState('')
  const [vaqti, setVaqt] = useState('')
   

 function addNewChiqim(event){
    event.preventDefault()
  
   let a = {id:length+1,
    foydalanuvchi:event.target[0].value, 
    miqdori: event.target[1].value,
    kassa:event.target[2].value,
    vaqti: event.target[3].value,
     }
     add(a)
    isOpen(false)
   setFoydal('')
    setMiqdor('')
    setKassa('')
    setVaqt('')
  
 }

  return (
    <div className='addLavozim'>
        <div className='card'>
            <div className='card-header'>
              Chiqim qo'shsish
            </div>
            <div className='card-body'>
                <form className='form' onSubmit={addNewChiqim} id={'addChiqim'}>
                  <select className='form-control' onChange={(e)=>setFoydal(e.target.value)}>
                    {
                      statefoyda.map((item, index)=>{
                        return(
                          <option key={index} value={item.nomi}>{item.nomi}</option>
                        )
                      })
                    }

                  </select>
                  <input className='form-control my-2' type={'number'} placeholder='Miqdori' value={miqdor} onChange={(e)=>setMiqdor(e.target.value)}/>
                  <select className='form-control' onChange={(e)=>setKassa(e.target.value)}>
                    {
                      stateKassa.map((item, index)=>{
                        return(
                          <option key={index} value={item.kassa}>{item.kassa}</option>
                        )
                      })
                    }

                  </select>
                  <input className='form-control my-2' type={'date'} placeholder='vaqt' value={vaqti} min="2021-01-01" max="2022-12-31" onChange={(e)=>setVaqt(e.target.value)}/>
                </form>
            </div>
            <div className='card-footer text text-end'>
                 <button className='btn btn-secondary mx-2' onClick={()=>isOpen(false)}>Chiqish</button>
                 <button type='submit' form='addChiqim' className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
     


    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    length: state.chiqimReducer.chiqim.length,
    statefoyda:state.foydalanuvchiReducer.foydalanuvchi,
    stateKassa: state.kassaReducer.kassa 
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      add: (summa) => dispatch(addChiqim(summa)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddChiqim)

