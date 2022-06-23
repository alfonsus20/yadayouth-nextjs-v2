import cn from "classnames";

type Props = {
  color: string;
  description: string;
};

const Donation = ({ color, description }: Props) => {
  return (
    <p
      data-testid="card-content"
      className={cn("col-span-1 rounded-xl p-8 relative shadow-lg text-white", {
        "bg-neon--orange": color === "orange",
        "bg-neon--green": color === "green",
        "bg-neon--yellow": color === "yellow",
        "bg-neon--blue": color === "blue",
      })}
    >
      {description}
    </p>
  );
};

export default Donation;
