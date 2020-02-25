import React, { Component } from 'react'

class Jadwal extends Component{
    state={
        classMenu:[
            {
                name : 'Web'
            },{
                name : 'Android'
            },{
                name : 'Blender'
            },{
                name : 'Python'
            },{
                name : 'DevOps'
            },
        ]
    }
    render(){
        return(
            <div className="content jadwal" style={{width:'140vh'}}>
                <div className="title">
                    <h1 className="text-center">Jadwal</h1>
                </div>
                <div className="row">
                    <div className="offset-md-1"></div>
                    {/* list button jadwal */}
                    <div className="offset-md-1"></div>
                </div>
                {/* main jadwal */}
            </div>
        )
    }
}

export default Jadwal