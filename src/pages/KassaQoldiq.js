import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'

 function KassaQoldiq({kassa, kirim, chiqim}) {
    const [kassaArray, setKassaArray]= useState([])
    const [kirimArray, setKirimArray] = useState([])
    const [chiqimArray, setChiqimArray] = useState([])
    const [qoldiq1,setQoldiq1] = useState('')
    const [qoldiq2,setQoldiq2] = useState('')
    const [qoldiq3,setQoldiq3] = useState('')
    const [qoldiq4,setQoldiq4] = useState('')

    
      function counting(){
        kassaArray.map((item, index)=>{
           let a = 0
          let  b = kirimArray.filter(kirim=>kirim.kassa===item.kassa)
           console.log(b)
           b.map(item=>a+=item.miqdori)
          let c = chiqimArray.filter(chiqim=>chiqim.kassa===item.kassa).map(item=>a-=item.miqdori)
            console.log(c)
            console.log(a)
          if(index===0){
                setQoldiq1(a)
            }else if(index===1){
                setQoldiq2(a)
            }else if(index===2){
                setQoldiq3(a)    
            }else{
                setQoldiq4(a)   
            }

console.log(qoldiq1, qoldiq2, qoldiq3)
          }
          )}
 
   useEffect(()=>{
    return counting()
    } )
    useEffect(()=>{
    setKassaArray(kassa)
     },[kassa])
     useEffect(()=>{
        setKirimArray(kirim)
    }, [kirim])
     useEffect(()=>{
        setChiqimArray(chiqim)
     }, [chiqim])
  return (
    <div className='row'>
        {kassaArray.map((item, index)=>{
            return(
             <div className='col-md-5 m-2 text text-center' key={index}>
              <div className='bg-secondary m-1 p-2'><h2>{item.kassa} qoldiq : {(index===0)?qoldiq1:''}{(index===1)?qoldiq2:''}{(index===2)?qoldiq3:''}{(index===3)?qoldiq4:''}</h2></div>
                <div className='bg-secondary m-1 p-2'>
                   {kirimArray.filter(kirim=>kirim.kassa===item.kassa).map((kirim,index)=>{
                        return(
                            <h4 className='text text-primary' key={index}> Kirim: {kirim.miqdori}</h4>                        )
                        
                    })}
                    
                    {chiqimArray.filter(chiqim=>chiqim.kassa===item.kassa).map((chiqim,index)=>{
                        return(
                            <h4 className='text text-danger' key={index}>Chiqim: {chiqim.miqdori}</h4>
                        )
                        
                    })} 
                   
                </div>
             </div>
            )
        })}
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        kassa: state.kassaReducer.kassa,
        kirim:state.kirimReducer.kirim,
        chiqim:state.chiqimReducer.chiqim
    }
}

export default connect(mapStateToProps)(KassaQoldiq)