import stock from "./stock.png";
import Card from "../ui/Card";

function HomePage() {
  return (
    <div class="container-lg my-5">
      <div class="row">
        <div class="col-12 mx-5">
          <img class="img-fluid" src={stock}></img>;
        </div>
        <div class="row justify-content-right mx-3">
          <div class="col-2">
            <Card>HOD (VALUE HERE)</Card>
          </div>
          <div class="col-2">
            <Card>LOD (VALUE HERE)</Card>
          </div>
          <div class="col-2">
            <Card>VOL (VALUE HERE)</Card>
          </div>
          <div class="col-2">
            <Card>FLOAT (VALUE HERE)</Card>
          </div>
          <div class="col-2">
            <Card>OPEN (VALUE HERE)</Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
