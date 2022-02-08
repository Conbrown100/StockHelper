import stock from "./stock.png";
import Card from "../ui/Card";

function HomePage() {
  return (
    <div class="container-lg my-5">
      <div class="row">
        <div class="col-10">
          <img class="img-fluid" src={stock}></img>;
        </div>
        <div class="row justify-content-right">
          <Card>HOD</Card>
          <Card>LOD</Card>
          <Card>VOL</Card>
          <Card>AVG VOL</Card>
          <Card>OPEN</Card>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
