import "./Marks.css"

const Marks = ({name,rn,m1,m2}) => {
  return (
    <div id="mrk">
        <h1>Marksheet</h1>
        <h2>Name:{name}</h2>
        <h2>Roll No:{rn}</h2>
        <h2>Sem1:{m1}</h2>
        <h2>Sem2:{m2}</h2>
    </div>
  );
};

export default Marks;