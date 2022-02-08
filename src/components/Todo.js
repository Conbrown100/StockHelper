function Todo(props) {
  return (
    <div className="card">
      <h1> Stock Helper </h1>
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn">Iambutton</button>
      </div>
    </div>
  );
}

export default Todo;
