import React, { Component } from 'react'
import CardInfoRegis from './card_info_regis'

class InfoRegis extends Component{
    state={
        infoRegis:[
            {
                head : 'Biaya Pendaftaran',
                body : 'Rp.30000',
                foot : 'Sertifikat & Merchendise'
            },{
                head : 'Waktu Kegiatan',
                body : '12 Mei - 15 Mei 2020',
                foot : '4X Pertemuan'
            },{
                head : 'Tempat Kegiatan',
                body : 'Kampus Udinus Semarang',
                foot : 'Google Maps Lokasi'
            },
        ]
    }
    render(){
        const state = this.state
        return(
            <div className="content info_regis">
                <div className="content_title">
                    <h1>Biaya,Tempat,Waktu</h1>
                    <hr style={{width:'500px',border:'5px solid'}}/>
                </div>
                <div className="row" style={{margin:'0px'}}>
                <div className="offset-md-1"></div>
                    <div className="col-md-4" style={{margin:'auto'}}>
                        {state.infoRegis.map((info,key)=>{
                            return(
                                <div key={key}>
                                    <CardInfoRegis data={info}/>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-4">
                        {/* for img log*/}
                    </div>
                    <div className="offset-md-1"></div>
                </div>
            </div>
        )
    }
}

export default InfoRegis