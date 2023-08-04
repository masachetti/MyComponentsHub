const ComponentA = ({ preview = 1 }) => {
  return <div>Component A Preview : {preview}</div>;
};

const ComponentAData: HubComponentData = {
  name: "Component A with a looooooooong name",
  description: "A component called Component A that do nothing",
  tags: ["A"],
  preview: {
    preview1: <ComponentA></ComponentA>,
    preview2: <ComponentA preview={2}></ComponentA>,
  },
};

export default ComponentAData;
