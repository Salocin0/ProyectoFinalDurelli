import NavBar from "./NavBar"
const Footer = () => {

    return (
        <footer>
            <a href="/">Copyright &copy; 2022</a>
            <NavBar
                //{
                textLinkFooter="Home" //,
                hrefLinkFooter="http://localhost:3000/"
                //}
            />
        </footer>
    )
}

export default Footer