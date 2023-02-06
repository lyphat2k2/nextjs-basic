import CatEvent from '/src/components/events/catEvent.jsx'

const EventsCatPage = ({ events, pageName }) => (
    <CatEvent events={events} pageName={pageName} />
)

export default EventsCatPage;

export async function getStaticPaths() {
    const { events_categories } = await import('/data/data.json');
    const allPaths = events_categories.map((e) => {
        return {
            params: {
                cat: e.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { cat } = context.params;
    const { allEvents } = await import('/data/data.json');
    const events = allEvents.filter((ev) => ev.city === cat);
    const pageName = cat

    return {
        props: { events, pageName },
    };
}
