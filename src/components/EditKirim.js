import React, {useState, useEffect} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {connect} from 'react-redux'
import {editKirim} from '../store/kirim'

function EditKirim( {isOpen, toggle, editingKirim, index, editKirim, stateKassa, statefoyda}) {
  const [kirim, setKirim] = useState({editingKirim})
  const [foydal, setFoydal]=useState('')  
  const [miqdor, setMiqdor]= useState('')
  const [kassa, setKassa] = useState('')
  const [vaqti, setVaqt] = useState('')

 
  function editKirim1(e){
    e.preventDefault()
    toggle()
    let foyda1 = e.target[0].value===''? foydal : e.target[0].value
    let miqdor1 = e.target[1].value===''? miqdor : e.target[1].value
    let kassa1 = e.target[2].value===''? kassa : e.target[2].value
    let vaqt1 = e.target[3].value===''? vaqti : e.target[3].value
      
     let EditedKirim = {
      id:editingKirim.id,
      foydalanuvchi:foyda1,
      miqdori:miqdor1,
      kassa:kassa1,
      vaqti: vaqt1


     }
  
     editKirim({item:EditedKirim, index:index})
     setFoydal('')
     
  }

 useEffect(()=>{
    if(editingKirim){
    setKirim(editingKirim)
    }
   },[{isOpen}] )

   useEffect(()=>{
    if(editingKirim){
   setFoydal(editingKirim.foydalanuvchi)
   setMiqdor(editingKirim.miqdori)
   setKassa(editingKirim.kassa)
   setVaqt(editingKirim.vaqti)
  }
  },[kirim])
 
 
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
     Kirimni O'zgartirish
      </ModalHeader>
      <ModalBody>
        {kirim?
        <form onSubmit={editKirim1} id='editForm'>
            <select className='form-control' placeholder={foydal} value={foydal} onChange={(e)=>setFoydal(e.target.value)}>
                    {
                      statefoyda.map((item, index)=>{
                        return(
                          <option key={index} value={item.nomi}>{item.nomi}</option>
                        )
                      })
                    }
                    </select>
            <input className='form-control my-1'type={'number'} placeholder={miqdor} value={miqdor}  onChange={(e)=>setMiqdor(e.target.value)}/>
            <select className='form-control' value={kassa} onChange={(e)=>setKassa(e.target.value)}>
                    {
                      stateKassa.map((item, index)=>{
                        return(
                          <option key={index} value={item.kassa}>{item.kassa}</option>
                        )
                      })
                    }
        
        </select>
        <input className={'form-control'} type={'date'} value={vaqti}  min="2022-01-01" max="2022-12-31" onChange={(e)=>setVaqt(e.target.value)}/>
        </form> :''}
      </ModalBody>
      {kirim? 
      <ModalFooter>
    
        <button className='btn btn-success' type={'submit'} form={'editForm'}>Saqlash</button>
        <button className='btn btn-danger'  onClick={toggle}>Chiqish</button>
       
      </ModalFooter>
       :''}

    </Modal>
  )
}
const mapStateToProps=(state)=>{
  return{
    statefoyda:state.foydalanuvchiReducer.foydalanuvchi,
    stateKassa: state.kassaReducer.kassa 
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    editKirim:(kirim)=>dispatch(editKirim(kirim))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditKirim)