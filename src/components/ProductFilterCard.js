

function ProductFilterCard(props) {


  return (
    <div  className="card" onClick={props.onClick}>
      <img src={props.category.src} className="card-img-top" alt={props.category.title} />
      <div className="card-body">
        <p className="">{props.category.title}</p>
      </div>
    </div>
  );
}

export default ProductFilterCard;