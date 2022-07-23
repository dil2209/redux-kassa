import React, {useEffect, useState} from 'react'
import AddChiqim from '../components/AddChiqim'
import edit from '../images/images.jpg'
import del from '../images/images.png'
import EditChiqim from '../components/EditChiqim'
import  { connect } from 'react-redux'
import {delChiqim} from '../store/chiqim'


function Chiqim({chiqim, delItem}) {
  const [chiqim1, setChiqim1] = useState(chiqim)
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editChiqim, setEditChiqim] = useState({})
  const [delId, setDelId]= useState('')
  const [index, setIndex] = useState('')

  function toggleAdd(){
    setIsOpen(!isOpen)
  }
   function editToggle(item, id){
    setIsEditOpen(!isEditOpen)
    setEditChiqim(item)
    setIndex(id)
   }
  function delingItem(id){
    delItem(id)
    setDelId(id)
  }
  useEffect(()=>{
    setChiqim1(chiqim)
  },[chiqim])
  return (
    <div>
      <div className='row p-2'>
          <div className={isOpen ? "col-md-8 border border-muted rounded mx-3 my-2 p-2 " :"col-md-11 m-5 border border-muted rounded p-3"} >
            <div className='row'>
        <div className='col-md-8 ms-2'>
          <h1 className='text text-center'>Chiqim</h1>
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
              {chiqim1.map((item, index)=>{
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
         <AddChiqim isOpen={setIsOpen} /> 
         </div>
          : ''}
        
       
      </div>
      <EditChiqim isOpen={isEditOpen} index={index} toggle={editToggle} editingChiqim={editChiqim}/>
   </div>
  )
}
const mapStateToProps=(state)=>{
  return {chiqim : state.chiqimReducer.chiqim}
}
const mapDispatchToProps=(dispatch)=>{
  return {
     delItem: (id)=>dispatch(delChiqim(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chiqim)