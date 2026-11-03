import { Link } from "react-router-dom"

const BookCard = ({author_name, title, first_publisher_year, cover_i}) => {
    return (
        <Link className="book-card" to={`book/`}>
            <div className="book-image">
                <img
                    src={`https://covers.openlibrary.org/b/id/8231856-L.jpg"`}
                    alt={title}
                />
                <button className="favorite">♡</button>
            </div>
            <div className="book-info">
                {title && <h3>{title}</h3>}
                {author_name && <p>{author_name.join(",")}</p>}
                {first_publisher_year && <span className ="year">{first_publisher_year}</span>}
            </div>
        </Link>
    )
}

export default BookCard
