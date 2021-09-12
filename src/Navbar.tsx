import React from "react";

export default class Navbar extends React.Component{
    render() {
        let showHamburger = () => {
            let x = document.getElementById("myTopnav");
            if(x != null) {
                if (x.className === "topnav") {
                    x.className += " responsive";
                } else {
                    x.className = "topnav";
                }
            }
        }

        const navlink = {
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            paddingRight: "15px",
            textDecoration: "none",
            fontSize: "25px"
        };

        const nav = {
            height: "80px",
            display: "flex",
            padding: "10px 0 0 25px",
            alignItems: "center"
        }

        const logo = {
            height: "100%"
        }


        return (
            <nav style={nav}>
                <img src='/images/logo.png' style={logo}></img>
                <ul style={{paddingLeft: "20px"}} className="topnav" id="myTopnav">
                    <a href="#" className="hide-mobile" style={navlink}>About</a>
                    <a href="#" style={navlink}>Rarity</a>
                    <a href="#" className="hide-mobile" style={navlink}>Buy</a>
                    <a href="https://www.youtube.com/" className="fab fa-discord" style={navlink}/>
                    <a href="https://www.youtube.com/" className="fab fa-twitter" style={navlink}/>
                    <a href="javascript:void(0);" className="nav-icon" onClick={showHamburger} style={navlink}>
                        <i className="fa fa-bars nav-icon"></i>
                    </a>
                </ul>
            </nav>
        );
    }
}

