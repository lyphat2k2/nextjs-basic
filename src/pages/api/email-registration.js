import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);
  return data;
}

export default function handler(req, res) {
  const { method } = req;
  const filePath = buildPath();
  const { events_categories, allEvents } = extractData(filePath);

  if (!allEvents) {
    res.status(404).json({
      message: "Events data not found",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    const newAllEvents = allEvents.map((event) => {
      if (event.id !== eventId) return event;
      if (event.emails_registered.includes(email)) {
        res.status(201).json({ 
          message: "This email is already been registered!" 
        });
        return event
      }
      return {
        ...event,
        emails_registered: [...event.emails_registered, email],
      };
    });

    fs.writeFileSync(filePath, JSON.stringify({
        events_categories, 
        allEvents: newAllEvents 
    }));

    res.status(200).json({
      message: `You have been registered successfully with the email ${email} with event::${eventId}`,
    });
  }
}