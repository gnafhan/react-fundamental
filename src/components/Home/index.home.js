import image2 from '../../image2.gif'
import { Figure, Button } from 'react-bootstrap'

function Home() {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{minHeight:"80vh"}}>
                <div className="">
                    <div className="m-5" role="alert">
                        <h1 className=" ">Welcome to PostingCuy</h1>
                        <div className="d-flex justify-content-between">
                            <Button href="/albums" variant="btn btn-outline-primary mt-5 mx-auto   btn-lg">IMAGES</Button>
                            <Button href="/posts" variant="btn btn-outline-primary mt-5 mx-auto   btn-lg">POSTS</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <br/>
                </div>
                <div>
                <Figure>
                    <Figure.Image
                        width={500}
                        height={500}
                        alt="171x180"
                        src={image2}
                    />
                </Figure>
                </div>

            </div>
            
        </div>
        
    )
}

export default Home