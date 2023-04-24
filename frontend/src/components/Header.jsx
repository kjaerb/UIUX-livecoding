import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='px-2 px-sm-5'>
            <Navbar.Brand href="/">TwitterClone</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/mytweets">My Tweets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}