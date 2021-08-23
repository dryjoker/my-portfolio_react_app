import React from 'react';
import './header.css';
import Typed from 'react-typed';

function Header() {
    return (
        <div className="main-info">
            <h1>Who Am I?</h1>
            <Typed
                strings={[
                    "",
                    "A software engineer",
                    "Also known as an",
                    "back-end developer",
                    "expert in .net webform, .net mvc, .net core",
                    "know a little front-end framework(react,vue,angular)",
                    "",
                    ""
                ]}
                typeSpeed={60}
                backSpeed={85}
                loop
            />
        </div>
    )
}

export default Header
