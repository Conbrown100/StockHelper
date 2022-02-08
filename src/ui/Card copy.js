import classes from "./card.module.css";

function Card(props) {
  return (
    <div class="container-lg my-4">
      <div class="row">
        <div className={classes.card}>
          <div class="vstack gap-3 col-md-5 ">
            <div class="p-5 bg-dark border"> HOD</div>
            <div class="p-5 bg-dark border"> LOD</div>
            <div class="p-5 bg-dark border"> VOL</div>
            <div class="p-5 bg-dark border"> AVG VOL</div>
            <div class="p-5 bg-dark border"> OPEN</div>
            <div class="p-5 bg-dark border"> CLOSE</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
