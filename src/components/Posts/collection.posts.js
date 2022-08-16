import axios from 'axios';
import {useEffect, useState} from 'react'
import React from 'react'
import {Card, Button, Container, Modal} from 'react-bootstrap'
import Loaders from '../Utilities/loader';


const Collection = () => {
    const [limit, setLimit] = useState(15);
    const [datas, setDatas] = useState([]);
    const [show, setShow] = useState(false);
    const [temporary, setTemporary] = useState();
    const [titleTemp, setTitleTemp] = useState();
    const [tempId, setTempId] = useState();
    const [tempLimit, setTempLimit] = useState();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios({
            url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
            method: "GET"
        }).then((res) => setDatas(res.data)).catch((err) => console.log(err)).finally(() => setLoading(false))
    }, [limit])
    function handleSubmit(e) {
        e.preventDefault();
        if (tempLimit <1) {
            alert('tidak bisa kurang dari 1')
            setLimit((prev)=> prev);
        } else if(tempLimit >600){
            alert('tidak bisa lebih dari 600')
            setLimit((prev)=> prev);
        } 
        else{
            setLimit(tempLimit)
        }


      }
      
      const handleClose = () => setShow(false);
      const handleShow = (title ,body, id) => {
        setShow(true)
        setTemporary(body)
        setTitleTemp(title)
        setTempId(id)
    };
    if(loading) return <Loaders/>

    return(
        <React.Fragment>
            <Container className="d-flex justify-content-center align-center mt-2">
            <form onSubmit={handleSubmit}>
            <input require  id='luis' onChange={(e) => setTempLimit(e.target.value)} className="form-control" type="number" placeholder="masukkan jumlah data" maxLength="3"></input>
            <button className="btn btn-outline-primary">Submit</button>
            </form>

            </Container>
            <Container>
            {datas.map((data, i) => {
                return (
                    <React.Fragment>
                    <Card key={i} variant="m-2 " className="m-3 shadow d-inline-flex f" style={{width: '18rem'}}>
                        <Card.Body>
                            <h3>{data.title}</h3>
                            <button onClick={()=> handleShow(data.title, data.body, data.id)} className="btn btn-outline-info">
                                Selengkapnya
                            </button>
                        </Card.Body>
                    </Card>
                                 
                    </React.Fragment>
                    
                )
            })}
            
                     <Modal show={show} onHide={handleClose} centered>
                        <Modal.Title className="d-flex justify-content-center align-center mt-2 ">{tempId}</Modal.Title>
                        <Modal.Header closeButton>
                        <Modal.Title>{titleTemp}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{temporary}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        </Modal.Footer>
                     </Modal>           
            <div>
                <h1>

                </h1>
            </div>
            </Container>
            
        </React.Fragment>
    )
}
export default Collection;