import cn from "classnames";

type Props = {
  color: string;
  description: string;
};

const Donation = ({ color, description }: Props) => {
  return (
    <p
      className={cn(
        "col-span-1 rounded-xl p-8 relative shadow-lg text-white",
        {
          "bg-orange shadow-orange/50": color === "orange",
          "bg-green shadow-green/50": color === "green",
          "bg-yellow shadow-yellow/50": color === "yellow",
          "bg-blue shadow-blue/50": color === "blue",
        }
      )}
    >
      {description}
    </p>
  );
};

export default Donation;
