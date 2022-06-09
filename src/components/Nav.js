const Nav = () => {

    return (
        <header>
            <a
                href="#"
                className="logo">
                Logo
            </a>
            <ul>
                <li>
                    <a href="#"
                        className="active">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#">
                        About
                    </a>
                </li>
                <li>
                    <a href="#">
                        Work
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contact Me
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Nav;