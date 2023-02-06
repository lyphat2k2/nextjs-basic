import EventsPage from 'src/components/events'

const Event = ({ data }) => {
    return <EventsPage data={data} />;
};

export default Event;

export async function getStaticProps() {
    const { events_categories } = await import('/data/data.json');

    return {
        props: {
            data: events_categories,
        },
    };
}
