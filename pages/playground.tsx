import Button from "../components/Button";

const Playground = () => {
  return (
    <div className="p-16 space-y-8">
      <div className="space-x-8">
        <Button size="sm">Small</Button>
        <Button>Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="space-x-8">
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="tertiary">Tertiary</Button>
      </div>
    </div>
  );
};

export default Playground;
