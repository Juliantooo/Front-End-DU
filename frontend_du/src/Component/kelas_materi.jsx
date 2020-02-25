import React, { Component } from 'react'
import webImg from '../assets/web.png'
import androidImg from '../assets/Android.png'
import pythonImg from '../assets/python.png'
import blenderImg from '../assets/blender.png'
import devOpsImg from '../assets/devops.png'
import CardKelas from './card_kelas'

class KelasMateri extends Component{
    state={
        semuaKelas:[
            {
                kelasImg:`${webImg}`,
                namaKelas:'Web',
                deskripsiKelas:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui, voluptas nisi omnis tenetur recusandae assumenda nihil! Cum aut rem veritatis quae eius ducimus quod voluptas culpa commodi. Maiores, debitis?',
                kuotaKelas:'30/30',
                reverse:false
            },{
                kelasImg:`${androidImg}`,
                namaKelas:'Android',
                deskripsiKelas:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui, voluptas nisi omnis tenetur recusandae assumenda nihil! Cum aut rem veritatis quae eius ducimus quod voluptas culpa commodi. Maiores, debitis?',
                kuotaKelas:'30/30',
                reverse:true
            },{
                kelasImg:`${pythonImg}`,
                namaKelas:'Pyhton',
                deskripsiKelas:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui, voluptas nisi omnis tenetur recusandae assumenda nihil! Cum aut rem veritatis quae eius ducimus quod voluptas culpa commodi. Maiores, debitis?',
                kuotaKelas:'30/30',
                reverse:false
            },{
                kelasImg:`${blenderImg}`,
                namaKelas:'Blender',
                deskripsiKelas:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui, voluptas nisi omnis tenetur recusandae assumenda nihil! Cum aut rem veritatis quae eius ducimus quod voluptas culpa commodi. Maiores, debitis?',
                kuotaKelas:'30/30',
                reverse:true
            },{
                kelasImg:`${devOpsImg}`,
                namaKelas:'DevOps',
                deskripsiKelas:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita qui, voluptas nisi omnis tenetur recusandae assumenda nihil! Cum aut rem veritatis quae eius ducimus quod voluptas culpa commodi. Maiores, debitis?',
                kuotaKelas:'30/30',
                reverse:false
            },
        ]
    }

    render(){
        const state = this.state
        return(
            <div>
                <div className="d-flex" style={{marginBottom:'200px'}}>
                    <div className="title-kelas ml-auto mr-5">
                        <h1 style={{fontSize:'60px'}}>Kelas & Pemateri</h1>
                        <hr style={{width:'500px',border:'5px solid black'}}/>
                    </div>
                </div>
                {state.semuaKelas.map((kelas,key)=>{
                    return(
                        <div key={key}>
                            <CardKelas data={kelas}/>
                        </div>
                    )
                })}
            </div>
            
           
        )
    }
}

export default KelasMateri