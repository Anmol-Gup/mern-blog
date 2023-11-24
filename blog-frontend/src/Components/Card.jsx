import { Link } from 'react-router-dom'
const Card = (prop) => {
    return (
        <div className="card" style={{ "width": "28rem" }}>
            <img src={prop.src} width='150' height="150" className="card-img-top" alt={prop.alt} />
            <div className="card-body">
                <h3>{prop.title}</h3>
                {
                    prop.content.map((content, index) => {
                        return <span className="card-text" key={index}>{content.substring(0, 30)}</span>
                    })
                }
                <span className="card-text">.....</span>
            </div>
        </div>
    )
}
export default Card