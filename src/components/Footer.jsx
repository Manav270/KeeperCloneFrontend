import React from "react";
function Footer()
{
    const currentyear=new Date().getFullYear();
    return(
        <footer>
            <p>Copyright &copy; {currentyear}</p>
        </footer>
    );
}
export default Footer;