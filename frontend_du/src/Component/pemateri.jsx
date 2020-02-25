import React,{Component} from 'react'
import bgPemateri from '../assets/pengajar.png'
import CardPemateri from './card_pemateri'
import { BtnNextPrev } from './button'
import styles from './style.module.css'

class Pemateri extends Component{
    state={
        semuaPemateri:[
            {
                nama : 'Wahyu',
                kelas: 'Pemateri kelas Web',
                no   : 0
            },{
                nama : 'Novan',
                kelas: 'Pemateri kelas Android',
                no   : 1
            },{
                nama : 'Vika',
                kelas: 'Pemateri kelas Blender',
                no   : 2
            }
            // ,{
            //     nama : 'Ilham',
            //     kelas: 'Pemateri kelas DevOps',
            //     no   : 2
            // },{
            //     nama : 'Husin',
            //     kelas: 'Pemateri kelas Python',
            //     no   : 2
            // }
        ]
    }
    render(){
        const state = this.state
        return(
            <div className="pemateri" style={{height:'130vh',backgroundImage:`url(${bgPemateri})`,backgroundSize:'100% 100%',backgroundRepeat:'no-repeat'}}>
                <div className="content-title text-center">
                    <h1 style={{fontSize:'60px'}}>Pemateri</h1>
                    <hr style={{border:'5px solid',width:'500px'}}/>
                </div>
                <div className="row d-flex h-100" style={{margin:'0'}}>
                    <div className="col-md-1 align-self-center">
                        <BtnNextPrev>p</BtnNextPrev>
                    </div>
                        {state.semuaPemateri.map((pemateri,key)=>{
                            return(
                                <div key={key} className={(key%2===0)?`col-md-3 align-self-center ${styles.blur}`:`col-md-4 align-self-center`}>
                                     <CardPemateri data={pemateri}/>
                                </div>
                            )
                        })}
                    <div className="col-md-1 align-self-center">
                        <BtnNextPrev>p</BtnNextPrev>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pemateri