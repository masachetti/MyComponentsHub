const ComponentB = ({ preview = 1 }) => {
  return <div>Component B Preview : {preview}</div>;
};

const ComponentBData: HubComponentData = {
  name: "Component B1234",
  description: "A component called Component B that do nothing",
  tags: ["B"],
  preview: {
    "preview 1": <ComponentB></ComponentB>,
    preview2: <ComponentB preview={2}></ComponentB>,
  },
};

export default ComponentBData;
