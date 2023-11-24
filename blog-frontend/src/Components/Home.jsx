import { Link } from 'react-router-dom'
import articles from '../../article-content'
import Card from './Card'
import Footer from './Footer'

const Home = () => {
    document.title = 'TechVeda'
    return (<>
        <section className="container d-flex flex-wrap justify-content-evenly mb-5">
            {
                articles.map((article, index) => {
                    return (
                        <Link to={`/article/${article.name}`} className='text-decoration-none' key={index}>
                            <Card title={article.title} parameter={article.name} src={article.thumbnail} alt={article.name} content={article.content} />
                        </Link>
                    )
                })
            }
        </section>
        <Footer />
    </>
    )
}
export default Home