import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addFoydalanuvchi} from '../store/foydalanuvchi'

 function AddFoydalanuvchi({isOpen, adding, length}) {
    const [nomi, setNomi] = useState('')
    const [telefon, setTelefon] = useState('')
    
 function addNew(event){
    event.preventDefault()
    console.log(length)
    let a = {id:length+1,
    nomi:nomi,
    tel:telefon}
    adding(a)
    isOpen(false)
    setNomi('')
    setTelefon('')
   
 }

  return (
    <div className='addStaff'>
       <div className='card'>
            <div className='card-header'>
                Xodim qo'shish
            </div>
            <div className='card-body'>
                <form className='form' onSubmit={addNew} id={'addUser'}>
                  <input className='form-control my-2' type={'text'} placeholder='Nomi' value={nomi} onChange={(e)=>setNomi(e.target.value)}/>
                  <input className='form-control my-2' type={'number'} placeholder='Telefon' value={telefon} onChange={(e)=>setTelefon(e.target.value)}/>
                 
            </form>
            </div>
            <div className='card-footer text text-end'>
                 <button className='btn btn-secondary mx-2' onClick={()=>isOpen(false)}>Chiqish</button>
                 <button type='submit' form='addUser' className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
     


    </div>
  )
}
const mapStateToProps=(state)=>{
  
   return {length:state.foydalanuvchiReducer.foydalanuvchi.length}
}
const mapDispatchToProps = (dispatch) => {
    return {
      adding:(newUser) => dispatch(addFoydalanuvchi(newUser)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddFoydalanuvchi)
