import React, { Component } from 'react'
import {DaftarBtn} from './button'
import ilustrasi from '../assets/sketch.png'

class Hero extends Component{
    render(){
        return(
            <div style={{minHeight: '80vh',color:'#fff',marginRight:'0',marginLeft:'0'}} className="mt-5 row pl-5 hero align-items-start">
                <div className="col-md-6 ml-5 mt-5" style={{textAlign:'left',lineHeight:'3.5em'}}>
                    <p style={{fontSize:'50px'}}>
                        <strong>AYO KEMBANGKAN <span style={{color:'green'}}>MINAT </span><br/>  & <span style={{color:'green'}}>BAKATMU</span> BERSAMA DOSCOM</strong>
                    </p>
                    <p style={{fontSize:'30px',lineHeight:'1.4em'}}>
                    Training dengan metode yang memadukan beberapa <br/>
                    kelas dan pengajar yang menyenangkan sesuai <br/>
                    minat peserta.
                    </p>
                    <DaftarBtn>Daftar</DaftarBtn>
                </div>
                <div className="col-md-4" style={{margin:'0px'}} >
                    <img src={ilustrasi} alt=""/>
                </div>
            </div>
        )
    }
}

export default Hero