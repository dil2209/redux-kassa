import React, {useState, useEffect} from 'react'
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'
import {connect} from 'react-redux'
import {editKassa} from '../store/kassa'

function EditKassa( {isOpen, toggle,index, editingKassa,  editKassa}) {

  const [kassa1, setKassa1] = useState({editingKassa})
  const [nomi, setNomi]=useState('')
 
  function editKassa1(e){
    e.preventDefault()
    toggle()
    let nom = e.target[0].value===''? nomi : e.target[0].value
   
      
     let EditedKassa = {
      id:editingKassa.id,
      kassa:nom
     }
      editKassa({item:EditedKassa, index:index})
     
  }

 useEffect(()=>{
    if(editingKassa){
    setKassa1(editingKassa)
    }
   },[{isOpen}] )

   useEffect(()=>{
    if(editingKassa){
     setNomi(kassa1.kassa)}
  },[kassa1])

 
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
      Kassani o'zgartirish!!
      </ModalHeader>
      <ModalBody>
        {kassa1?
        <form onSubmit={editKassa1} id='editForm'>
            <input className='form-control my-1' placeholder={nomi}  onChange={(e)=>setNomi(e.target.value)}/>
         </form> :''}
      </ModalBody>
      {kassa1? 
      <ModalFooter>
    
        <button className='btn btn-success' type={'submit'} form={'editForm'}>Saqlash</button>
        <button className='btn btn-danger'  onClick={toggle}>Chiqish</button>
       
      </ModalFooter>
       :''}
    </Modal>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return {
    editKassa:(kassa)=>dispatch(editKassa(kassa))
  }
}
export default connect(null, mapDispatchToProps)(EditKassa)