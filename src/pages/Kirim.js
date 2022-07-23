import React, {useState, useEffect} from 'react'
import AddKirim from '../components/AddKirim'
import edit from '../images/images.jpg'
import del from '../images/images.png'
import EditKirim from '../components/EditKirim'
import  { connect } from 'react-redux'
import {delKirim} from '../store/kirim'


function Kirim({kirim, delItem}) {
  const [kirim1, setKirim1] = useState(kirim)
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editKirim, setEditKirim] = useState({})
  const [delId, setDelId] = useState('')
  const [index, setIndex] = useState('')

  function toggleAdd(){
    setIsOpen(!isOpen)
  }
   function editToggle(item, id){
    setIsEditOpen(!isEditOpen)
    setEditKirim(item)
    setIndex(id)
   }
   function delingItem(id){
    delItem(id)
    setDelId(id)
   }
   useEffect(()=>{
    setKirim1(kirim)
   }, [kirim])
  
  return (
    <div>
      <div className='row p-2'>
          <div className={isOpen ? "col-md-8 border border-muted rounded mx-3 my-2 p-2 " :"col-md-11 m-5 border border-muted rounded p-3"} >
            <div className='row'>
        <div className='col-md-8 ms-2'>
          <h1 className='text text-center'>Kirim</h1>
        </div>
        <div className='col-md-1 offset-1 text text-end'>
            <button className='btn btn-outline-secondary text-dark' onClick={toggleAdd}>+ADD</button>
        </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
          <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Foydalanuvchi</th>
                    <th>Miqdori</th>
                    <th>Kassa</th>
                    <th>Vaqti</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {kirim1.map((item, index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.foydalanuvchi}</td>
                    <td>{item.miqdori}</td>
                    <td>{item.kassa}</td>
                    <td>{item.vaqti}</td>
                    <td>
                    <span><img className='editdelImage' src={edit} alt='edit' onClick={()=>editToggle(item, index)}/></span>
                     <span><img className='editdelImage' src={del} alt='del' onClick={()=>delingItem(index)} /></span>
                    </td>
                </tr>
                )
              })}
               
            </tbody>
        </table>
          </div>
        </div>
       </div>
       
        {isOpen?
        <div className='col-md-3'>
         <AddKirim isOpen={setIsOpen} /> 
         </div>
          : ''}
        
       
      </div>
      <EditKirim isOpen={isEditOpen} index={index} toggle={editToggle} editingKirim={editKirim}/>
   </div>
  )
}
const mapStateToProps=(state)=>{
  return {kirim : state.kirimReducer.kirim}
}
const mapDispatchToProps=(dispatch)=>{
  return {
     delItem: (id)=>dispatch(delKirim(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Kirim)
