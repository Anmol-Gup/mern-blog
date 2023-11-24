import Footer from "./Footer"

const Error = () => {
    document.title='Page Not Found!'
    return (<>
        <section className="container-fluid d-flex">
            <img src="404.png" class="img-fluid rounded mx-auto d-block error" alt="404 error"/>
        </section>
        <Footer />
    </>)
}
export default Error