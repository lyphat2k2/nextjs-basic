import Image from 'next/image';
import Link from 'next/link';

function Events({ data }) {
    return (
        <div className="events_page">
            {data.map(({ id, title, image }) => (
                <Link
                    key={id}
                    href={`events/${id}`}
                    legacyBehavior>
                    <a className="card">
                        <div className="image">
                            <Image
                                src={image}
                                alt={title}
                                width={400}
                                height={400}
                            />
                        </div>
                        <h2>{title}</h2>
                    </a>
                </Link>
            ))}
        </div>
    );
}

export default Events;
