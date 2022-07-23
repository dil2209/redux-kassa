import React, {useEffect, useState} from 'react'
import {Modal, ModalHeader, ModalFooter, ModalBody} from 'reactstrap'
import {connect} from 'react-redux'
import {editFoydalanuvchi} from '../store/foydalanuvchi'

function EditFoydalanuvchi( {isOpen, toggle,index, editItem, editfoydalan}) {
  const [foydal, setFoydal] = useState({})
  const [nomi, setNomi] = useState('')
  const [tel, setTel] = useState('')
  


  function editfoydal(e){
    e.preventDefault()
    toggle()
    let name = e.target[0].value===''? nomi : e.target[0].value
    let phone = e.target[1].value===''? tel : e.target[1].value
    
     let EditedFoydal = {
      id:foydal.id,
      nomi:name,
      tel:phone,
     }
     
     console.log(EditedFoydal)
     editfoydalan({item:EditedFoydal, index:index})
     
  }

  useEffect(()=>{
    if(editItem)
    setFoydal(editItem)
  },[{isOpen}] )
   useEffect(()=>{
  if(editItem){
   setNomi(foydal.nomi)
   setTel(foydal.tel)
  }
   }, [foydal])
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
       Foydalanuvchi ma'lumotlarini o'zgartirish!!
      </ModalHeader>
      <ModalBody>
       {foydal?
        <form onSubmit={editfoydal} id='editForm'>
        <input className='form-control my-1' value={nomi}  onChange={(e)=>setNomi(e.target.value)}/>
        <input className='form-control my-1' value={tel} type={'number'} value={tel} onChange={(e)=>setTel(e.target.value)}/>
    </form> :''}
      </ModalBody>
      {foydal? 
      <ModalFooter>
    
        <button className='btn btn-success' type={'submit'} form={'editForm'}>Saqlash</button>
        <button className='btn btn-danger' onClick={toggle}>Chiqish</button>
       
      </ModalFooter>
       :''}
    </Modal>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
    editfoydalan:(staff)=>dispatch(editFoydalanuvchi(staff)),
 }
}
export default connect(null, mapDispatchToProps)(EditFoydalanuvchi)