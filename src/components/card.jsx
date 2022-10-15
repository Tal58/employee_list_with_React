import data from "./data";
import { useState } from "react";
import  "../scss/Card.scss"

function Card() {
  const [counter, setCounter] = useState(5);
  const prev = () => {
    counter === 15
      ? setCounter(10)
      : counter === 10
      ? setCounter(5)
      : counter === 5
      ? setCounter(15)
      : setCounter(10);
  };
  const next = () => {
    counter === 5
      ? setCounter(10)
      : counter === 10
      ? setCounter(15)
      : counter === 15
      ? setCounter(5)
      : setCounter(10);
  };
  console.log(counter);
  return (
    <div className="main row mx-auto d-flex justify-content-evenly gap-3 my-3 col-md-10 col-sm-12">
      <div className="card col-md-6">
        <h1>Employee List</h1>
        <h4>(Employees {counter-4} to {counter})</h4>
        {data.map((item, key) => {
          return (
            counter - 5 <= key &&
            key < counter && (           
                <div key={item.id} className="card-body d-flex col-md-10">
                  <img src={item.image} className="img-thumbnail" alt="" />
                  <div className="p">
                  <p className="card-text"><b>{item.name}</b></p>
                  <p className="card-text">{item.email}</p>
                  <p className="card-text">{item.age} years</p>
                  </div>                 
                </div>             
            )
          );
        })}
        <div className="button">
          <button type="button" onClick={prev} className="btn btn-secondary">
            Prev
          </button>
          <button type="button" onClick={next} className="btn btn-secondary">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
