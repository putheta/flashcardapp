import "./NavbarComponent.css"
import EditIcon from '@rsuite/icons/Edit';
import InfoOutlineIcon from '@rsuite/icons/InfoOutline';
import CloseIcon from '@rsuite/icons/Close';
import { Sidenav , Nav } from 'rsuite'


function NavbarComponent() {
    return(
        <div className="Navbar-container">
            <Sidenav className="Sidenav-container">
                <Sidenav.Body>
                    <Nav>
                        <Sidenav.Toggle icon={<CloseIcon/>} className="toggle"/>
                        <Nav.Item icon={<EditIcon/>}>
                            Edit vocab
                        </Nav.Item>
                        <Nav.Item icon={<InfoOutlineIcon/>}>
                            About Me
                        </Nav.Item>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>

    )
}

export default NavbarComponent;