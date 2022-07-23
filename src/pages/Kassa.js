import React, {useState, useEffect} from 'react'
import AddKassa from '../components/AddKassa'
import edit from '../images/images.jpg'
import del from '../images/images.png'
import EditKassa from '../components/EditKassa'
import {connect} from 'react-redux'
import {delKassa} from '../store/kassa'


 function Kassa({kassa, delItem}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [kassa1, setKassa1] = useState(kassa)
  const [editKassa, setEditKassa] = useState('')
  const [delId, setDelId] = useState('')
  const [index, setIndex]=useState('')

  function toggleAdd(){
    setIsOpen(!isOpen)
  }
  function editToggle(item, id){
    setIsEditOpen(!isEditOpen)
    setEditKassa(item)
    setIndex(id)
   }
   function delingItem(id){
    console.log(id)
    delItem(id)
    setDelId(id)
   }
  useEffect(()=>{
     setKassa1(kassa)
  
  }, [kassa])
 

  return (
    <div>
         <div className='row p-2'>
          <div className={isOpen ? "col-md-8 border border-muted rounded mx-3 my-2 p-2 " :"col-md-11 m-5 border border-muted rounded p-3"} >
            <div className='row'>
        <div className='col-md-9 ms-2'>
          <h1 className='text text-center'>Kassa</h1>
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
                    <th>Nomi</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
              {kassa1.map((item, index)=>{
                return(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.kassa}</td>
                  <td>
                  <span><img className='editdelImage' src={edit} alt='edit' onClick={()=>editToggle(item, index)}/></span>
                   <span><img className='editdelImage' src={del} alt='del' onClick={()=>delingItem(index)}/></span>
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
         <AddKassa isOpen={setIsOpen}/> 
         </div>
          : ''}
        
       
      </div>
      <EditKassa isOpen={isEditOpen} index={index} toggle={editToggle} setEditOpen={setIsEditOpen} editingKassa={editKassa}/>
   </div>
  )
}
const mapStateToProps=(state)=>{
  return {kassa: state.kassaReducer.kassa}
}
const mapDispatchToProps=(dispatch)=>{
  return {
    delItem: (id)=>dispatch(delKassa(id)) }
}
export default connect(mapStateToProps, mapDispatchToProps)(Kassa)
