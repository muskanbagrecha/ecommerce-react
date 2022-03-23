import "./Section.css"

const Section = ({children}) => {
    return(
        <section className="row-container">
        {children}
        </section>
    )
}

export default Section;