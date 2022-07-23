import React, {useState, useEffect} from 'react'
import {PieChart} from 'amazing-react-charts'
import {connect} from 'react-redux'

function Diagramma({kirim, chiqim, user}) {
const [newArray, setNewArray] = useState([])

function counting(){
    user.map(item => {
    let a = 0
    let nom = item.nomi
    let kirimKassa = kirim.filter(kirim=>kirim.foydalanuvchi === nom)
    kirimKassa.map(item=>a+=parseInt(item.miqdori))
    chiqim.filter(chiqim=>chiqim.foydalanuvchi===nom).map(item=>a-=parseInt(item.miqdori))
    console.log(a)
    let qoldiq = 0
    kirim.map((item)=>qoldiq+=parseInt(item.miqdori)) 
    console.log(qoldiq) 
    chiqim.map((item)=>qoldiq-=parseInt(item.miqdori))
    console.log(qoldiq)
    let per = (a*100)/qoldiq
    let cent =per.toFixed(0)
    console.log(cent)
    let ulush = {
      name:nom,
      value:parseInt(cent)
    }
    newArray.push(ulush)
    setNewArray(newArray)
  })
  console.log(newArray)
}
useEffect(()=>{
   counting()
},[])



  return (
    <div>
      {newArray?
       <PieChart
       noAnimation
       colors={['red', 'yellow', 'blue', 'green']}
       legendPosition="inside"
       radius="75%"
       toolboxTooltip={{ saveAsImage: 'saving' }}
       title="FOYDALANUVCHI ULUSHI"
       resultFormatType="percent"
       labelFontColor="black"
       tooltipTitle="title"
       center={['50%', '50%']}
       data={newArray}
     /> : ''}
     
    </div>
  )
}
const mapStateToProps =(state)=>{
  return {
    user: state.foydalanuvchiReducer.foydalanuvchi,
    chiqim:state.chiqimReducer.chiqim,
    kirim:state.kirimReducer.kirim
  }
}
 export default connect(mapStateToProps)(Diagramma)

