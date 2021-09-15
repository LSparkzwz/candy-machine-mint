import React from "react";

export default class About extends React.Component<{
    height:number,
    width:number
}>{
    render() {
        let screen_height = this.props.height/1.4
        let width = this.props.width

        const akuma ={
            height: screen_height/1.7,
            width: screen_height/1.7,
            maxWidth:"500px",
            maxHeight:"500px",
            border: "5px solid #f5fbff",
            borderRadius: "25px",

        };

        const txt = {
            color: "white",
            fontFamily: "'Roboto', sans-serif",
            margin:"0",
            textDecoration: "none",
            fontSize: "2.2vw"
        };


        return (
            <div>
                <div style={{height:"15px", width:"100%", background:"#ff2a00"}}>
                </div>
                <div style={{height:screen_height, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", maxHeight:this.props.height, flex:1, background:"#212326"}}>

                    <div style={{display:"flex"}}>
                    {width < 600 ?
                        <div></div>
                        :
                        <div>
                        <img style={akuma} className="akuma b" src='/images/logo_square.png'/>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding:"0 20px", width: width/3, minWidth:"300px"}}>
                        <p style={txt}>About Akumaten</p>
                        </div>
                        </div>
                    }

                    </div>

                </div>
            </div>
        );
    }
}

