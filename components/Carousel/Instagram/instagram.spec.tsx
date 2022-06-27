import InstagramCarousel from ".";
import { IGPost } from "../../../types/entities/igPost";
import { render } from "@testing-library/react";

const mockedProps: IGPost[] = [
  {
    post_id: "1",
    permalink: "https://www.instagram.com/p/CNkBqoBnnPr/",
    media_url:
      "https://zcspsixwoefhuabatnmr.supabase.co/storage/v1/object/public/images-past-event/event-6.jpg",
    timePublished: "21-01-2022",
  },
];

describe("Event Carousel unit test", () => {
  it("should match snapshot", () => {
    const container = render(<InstagramCarousel data={mockedProps} />);
    expect(container).toMatchSnapshot();
  });
});
