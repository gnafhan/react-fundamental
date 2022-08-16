import {Navbar, Container, Nav} from "react-bootstrap"

const Navigation = ({isActive}) => {
  
    const path = window.location.pathname
    console.log(path)

    
    return (
        <>
        <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="/">PostingCuy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={path === "/" ? "border-bottom" : ''} to="/" href="/">HOME</Nav.Link>
            <Nav.Link className={path === "/albums" ? "border-bottom" : ''} href="/albums">IMAGES</Nav.Link>
            <Nav.Link className={path === "/posts" ? "border-bottom" : ''} href="/posts">POSTS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
        </>
    )


}
export default Navigation