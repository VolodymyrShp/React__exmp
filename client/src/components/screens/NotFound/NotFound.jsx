import "./NotFound.css";

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="items-wrapper">
                <h2 className="not-found">404 Not Found</h2>
                <p>Your visited page not found. You nay go home page.</p>
                <div className="button-container">
                    <button className="back-home-button">
                        Back to home page
                    </button>
                </div>
            </div>
            
        </div>
    )
    
}

export default NotFound;