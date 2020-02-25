import React,{Component} from 'react'
import dumyimg from '../assets/web.png'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';
import styles from './style.module.css'


class CardPemateri extends Component{
    render(){
        const data = this.props.data
        return(
            <div>
                <Card className={(data.no%2!==0)?`d-flex mx-auto ${styles.front_card}`:`d-flex mx-auto ${styles.beside_card}`}>
                    <CardImg top className="img-circle d-block mx-auto mt-5" style={{width:'200px'}} src={dumyimg} alt="Card image cap" />
                    <CardBody>
                    <CardTitle style={{fontSize:'60px'}}>
                        {data.nama}
                        {console.log(data)}
                    </CardTitle>
                        <CardSubtitle>{data.kelas}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default CardPemateri