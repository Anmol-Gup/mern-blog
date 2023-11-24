import {useParams} from 'react-router-dom'
import articles from '../../article-content'
import Footer from './Footer'
import Comments from './Comments'

const Article = () => {
    const {name}=useParams()
    const article=articles.filter((value)=>{
        return value.name===name
    })
    document.title=article[0].title
    return (
        <>
            <section className="container about_content">
                <h2 className='py-2'>{article[0].title}</h2>
                <div className="container">
                    <img src={article[0].thumbnail} className="img-thumbnail rounded" alt={article[0].name}></img>
                </div>
                <div className='py-4'>
                {
                    article[0].content.map((content, index) => {
                        return <p className="card-text" key={index}>{content}</p>
                    })
                }
                </div>
            </section>
            <Comments/>
            <br/><br/>
            <Footer/>
        </>
    )
}
export default Article