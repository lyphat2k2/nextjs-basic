import Image from "next/image"
import Link from "next/link"

const HomePage = ({ data }) => (
    <div className="home">
        {data.map(({ id, title, description, image }) => (
            <Link
                key={id}
                href={`events/${id}`}
                legacyBehavior>
                <a className="card">
                    <div className="image">
                        <Image
                            src={image}
                            alt={title}
                            width={600}
                            height={400}
                        />
                    </div>
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                </a>
            </Link>
        ))}
    </div>
)

export default HomePage