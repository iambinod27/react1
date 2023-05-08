import Card from "../components/Card";

const Index = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};
export default Index;
