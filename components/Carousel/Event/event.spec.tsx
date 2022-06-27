import EventCard from ".";
import { Event } from "../../../types/entities/event";
import { render } from "@testing-library/react";

const mockedProps: Event[] = [
  {
    title: "Title",
    date: "30-11-2021",
    text: "testing text",
    image:
      "https://zcspsixwoefhuabatnmr.supabase.co/storage/v1/object/public/images-past-event/event-6.jpg",
  },
];

describe("Event Carousel unit test", () => {
  it("should match snapshot", () => {
    const container = render(<EventCard data={mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
