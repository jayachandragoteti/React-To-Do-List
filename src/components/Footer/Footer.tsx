import React from 'react'

const Footer = ({ length }) => {
    const today = new Date();
    return (
        <footer>
            <div className="footer-container">
                <p className="length">{length} List {length === 1 ? 'item' : 'items'}</p>
                <p className="copyright">Copyright &copy; {today.getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer 