import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addKirim} from '../store/kirim'

 function AddKirim({add, length, isOpen, statefoyda, stateKassa}) {
  const [foydal, setFoydal]=useState('')  
  const [miqdor, setMiqdor]= useState('')
  const [kassa, setKassa] = useState('')
  const [vaqti, setVaqt] = useState('')
   

 function addNewKirim(event){
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
              Kirim qo'shish
            </div>
            <div className='card-body'>
            <form className='form' onSubmit={addNewKirim} id={'addKirim'}>
                  <select className='form-control' onChange={(e)=>setFoydal(e.target.value)}>
                    {
                      statefoyda.map((item, index)=>{
                        return(
                          <option key={index} value={item.nomi}>{item.nomi}</option>
                        )
                      })
                    }

                  </select>
                  <input className='form-control my-2' type={'number'} placeholder={miqdor} value={miqdor} onChange={(e)=>setMiqdor(e.target.value)}/>
                  <select className='form-control' onChange={(e)=>setKassa(e.target.value)}>
                    {
                      stateKassa.map((item, index)=>{
                        return(
                          <option key={index} value={item.kassa}>{item.kassa}</option>
                        )
                      })
                    }

                  </select>
                  <input className='form-control my-2' type={'date'} placeholder='vaqt' value={vaqti} onChange={(e)=>setVaqt(e.target.value)}/>
                </form>
            </div>
            <div className='card-footer text text-end'>
                 <button className='btn btn-secondary mx-2' onClick={()=>isOpen(false)}>Chiqish</button>
                 <button type='submit' form='addKirim' className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
     


    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    length: state.kirimReducer.kirim.length,
    statefoyda:state.foydalanuvchiReducer.foydalanuvchi,
    stateKassa: state.kassaReducer.kassa 
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      add: (kirim) => dispatch(addKirim(kirim)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddKirim)

