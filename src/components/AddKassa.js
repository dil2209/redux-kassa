import React, {useState} from 'react'
import { connect } from 'react-redux'
import {addKassa} from '../store/kassa'

 function AddKassa({add, length, isOpen}) {
    const [nomi, setNomi] = useState('')
   
   

 function addNewKassa(event){
    event.preventDefault()
  
   let a = {id: length+1,
     kassa:event.target[0].value
     }
    console.log(a)
    add(a)
    setNomi('')
   isOpen(false)
 }

  return (
    <div className='addLavozim'>
        <div className='card'>
            <div className='card-header'>
              Lavozim qo'shish
            </div>
            <div className='card-body'>
                <form className='form' onSubmit={addNewKassa} id={'addLavozim'}>
                  <input className='form-control my-2' type={'text'} placeholder='Nomi' value={nomi} onChange={(e)=>setNomi(e.target.value)}/>
                  
                </form>
            </div>
            <div className='card-footer text text-end'>
                 <button className='btn btn-secondary mx-2' onClick={()=>isOpen(false)}>Chiqish</button>
                 <button type='submit' form='addLavozim' className='btn btn-primary'>Saqlash</button>
            </div>
        </div>
     


    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    length : state.kassaReducer.kassa.length
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
      add: (kassa) => dispatch(addKassa(kassa)),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AddKassa)

