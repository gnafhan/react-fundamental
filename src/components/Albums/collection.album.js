import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ButtonGroup, Carousel, Container } from 'react-bootstrap';
import Loaders from '../Utilities/loader';


const Collection = () => {
    const [datas, setDatas] = useState([])
    const [limit, setLimit] = useState(3)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isCancelled = false;
        if (isCancelled === false){
            setLoading(true);    
            axios({
            url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
            method: "GET"
            }).then((res) => setDatas(res.data)).catch((err) =>console.log(err)).finally(() => setLoading(false))
        }
        return () => isCancelled = true;
      }, [limit]);
      
      const handleLimit = (e) => {
        e === '+'? setLimit(limit + 1) : setLimit(limit - 1)
      }
      
      if(loading) return <Loaders/>

    return(
        <React.Fragment>
            <Container>
            <h3>{limit} collection</h3>
            <Carousel>
            {datas.map((data, i) => {
                return (
                    <Carousel.Item key={i}>
                      <img
                        className="d-block w-100"
                        src={data.url}
                        alt="First slide"
                        height={450}
                        width={450}
                    />
                    <Carousel.Caption>
                    <h3>{data.title}</h3>
                    </Carousel.Caption>
                    </Carousel.Item>
                    )
                    })}
            </Carousel> 
            </Container>
            <ButtonGroup className="d-flex justify-content-center align-center mt-2">
                <button className="btn btn-outline-primary" onClick={() => handleLimit('+')}>+</button>
                <button className="btn btn-outline-primary" onClick={() => handleLimit('-')}>-</button>
               
            </ButtonGroup>
        </React.Fragment>
    )
}

export default Collection;