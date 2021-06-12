  
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class Portfolio extends React.Component {
    state = {
        users: [],
    }
    render() {
        return (
            <div className="container">
                <Header />
                <Footer />
            </div>
        )
    }
}

export default Portfolio;