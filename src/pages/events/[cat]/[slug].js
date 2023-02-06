import SingleEvent from '/src/components/events/singleEvent.jsx'
const EventPage = ({ events }) => (
        <SingleEvent events={events} />
);

export default EventPage;

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json')
    const allPaths = allEvents.map(event => {
        return {
            params: {
                cat: event.city.toString(),
                slug: event.id.toString()
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const { cat, slug } = context.params
    const { allEvents } = await import('/data/data.json')
    const events = allEvents.find(event => (event.city === cat && event.id === slug))

    return {
        props: { events }
    }
}