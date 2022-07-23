import React , {useState, useEffect}from 'react'
import {connect} from 'react-redux'

function Klientkassa({foydalanuvchi, kirim, chiqim}) {
  const [user, setUser] = useState([])
  const [kirimArray, setKirimArray] = useState([])
  const [chiqimArray, setChiqimArray] = useState([])

    useEffect(()=>{
   setUser(foydalanuvchi)
    },[foydalanuvchi])

    useEffect(()=>{
      setKirimArray(kirim)
    },[kirim])
       
    useEffect(()=>{
      setChiqimArray(chiqim)
    },[chiqim])

  return (
    <div>
     <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Foydalanuvchi</th>
          <th>Kassa</th>
          <th>Summa</th>
        </tr>
      </thead>
      <tbody>
       {user.map((item,index)=>{
        return(
          <tr key={index}>
            <td>{index+1}</td>
            <td>{item.nomi}</td>
            <td>
           {kirimArray.filter(kirim=>kirim.foydalanuvchi===item.nomi).map((kirim, index)=>{
                return (
                  <tr key={index}>
                 <td className='text text-primary'>{kirim.kassa}</td>
                 </tr>   
                )
              })}
            {chiqimArray.filter(chiqim=> chiqim.foydalanuvchi===item.nomi).map((chiqim, index)=>{
              return(
                <tr key={index}>
                <td className='text text-danger' >{chiqim.kassa}</td>
                </tr>
              )             
            })}
           </td>
           <td>
           {kirimArray.filter(kirim=>kirim.foydalanuvchi===item.nomi).map((kirim, index)=>{
                return (
                  <tr key={index}>
                 <td className='text text-primary' >{kirim.miqdori}</td>
                 </tr>  
                )
              })}
                {chiqimArray.filter(chiqim=> chiqim.foydalanuvchi===item.nomi).map((chiqim, index)=>{
              return(
                <tr key={index}>
                <td  className='text text-danger'>{chiqim.miqdori}</td>
                </tr>
              )             
            })}
           </td>
     
           
          </tr>
        )
       })

       }
      </tbody>
     </table>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    foydalanuvchi:state.foydalanuvchiReducer.foydalanuvchi,
    kirim: state.kirimReducer.kirim,
    chiqim:state.chiqimReducer.chiqim
  }
}
export default connect(mapStateToProps)(Klientkassa)