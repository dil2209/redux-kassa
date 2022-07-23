import React, {useState, useEffect} from 'react'
import AddFoydalanuvchi from '../components/AddFoydalanuvchi'
import edit from '../images/images.jpg'
import del from '../images/images.png'
import EditFoydalanuvchi from '../components/EditFoydalanuvchi'
import {connect} from 'react-redux'
import {delFoydalanuvchi} from '../store/foydalanuvchi'

function Foydalanuvchi({foydalanuvchi1, delItem}) {
  const [foydalanuvchi, setFoydalanuvchi] = useState(foydalanuvchi1)
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editFoydalanuvchi, setEditFoydalanuvchi] = useState('')
 
  const [index, setIndex] = useState('')

  function toggleAdd(){
    setIsOpen(!isOpen)
  }
 
   function editToggle(item, id){
    setIsEditOpen(!isEditOpen)
    setEditFoydalanuvchi(item)
    setIndex(id)
  }
  function delingItem(id){
    delItem(id)
   
 }
  useEffect(()=>{
    setFoydalanuvchi(foydalanuvchi1)
  }, [foydalanuvchi1])

 
  return (
    <div>
       <div className='row p-2'>
          <div className={isOpen ? "col-md-8 border border-muted rounded mx-3 my-2 p-2 " :"col-md-11 m-5 border border-muted rounded p-3"} >
            <div className='row'>
        <div className='col-md-9 ms-2'>
          <h1 className='text text-center'>Foydalanuvchilar</h1>
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
                    <th>Ism</th>
                    <th>Telefon</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {foydalanuvchi.map((item, index)=>{
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.nomi}</td>
                    <td>{item.tel}</td>
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
         <AddFoydalanuvchi isOpen={setIsOpen}/> 
         </div>
          : ''}
        
       
      </div>
      <EditFoydalanuvchi isOpen={isEditOpen} index={index} toggle={editToggle} editItem={editFoydalanuvchi}/>
   </div>
  )
}
const mapStateToProps=(state)=>{
  return {foydalanuvchi1:state.foydalanuvchiReducer.foydalanuvchi}

}
const mapDispatchToProps=(dispatch)=>{
  return{
    delItem:(item)=>dispatch(delFoydalanuvchi(item))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Foydalanuvchi)
