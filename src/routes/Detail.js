import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const toDo = useSelector((state) =>
    state.find((todo) => todo.id === parseInt(id)),
  );

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  );
}

export default Detail;
