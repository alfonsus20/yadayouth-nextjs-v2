import { render } from "@testing-library/react";
import InstagramCarousel from ".";
import { IGPost } from "../../../types/entities/igPost";

const mockedProps: IGPost[] = [
  {
    id: "1",
    permalink: "https://www.instagram.com/p/CNkBqoBnnPr/",
    media_url:
      "https://zcspsixwoefhuabatnmr.supabase.co/storage/v1/object/public/images-past-event/event-6.jpg",
  },
];

describe("Event Carousel unit test", () => {
  it("should match snapshot", () => {
    const container = render(<InstagramCarousel data={mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
