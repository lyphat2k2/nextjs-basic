import Image from 'next/image';
import Link from 'next/link';

// Define Object Property
function toCapitalizeCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function CatEvent({ events, pageName }) {
    return (
        <div className='cat_events'>
            <h1>Events in {toCapitalizeCase(pageName)}</h1>
            <div className='container'>
                {events.map(({ id, title, city, image, description }) => (
                    <Link
                        key={id}
                        href={`/events/${city}/${id}`}
                        legacyBehavior>
                        <a className='card'>
                            <div className='image'>
                                <Image
                                    src={image}
                                    alt={id}
                                    width="400"
                                    height="250"
                                />
                            </div>
                            <div className='content'>
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default CatEvent;
