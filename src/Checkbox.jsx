import { useState } from "react";
let initialValues = [
  { name: "thriller", checked: false },
  { name: "crime", checked: false },
  { name: "action", checked: false },
];

export default Checkbox = () => {
  const [checks, setChecks] = useState(initialValues);
  const [buttonVal, setButtonVal] = useState("check all");

  const checkanduncheckAll = (e) => {
    e.preventDefault();
    if (buttonVal == "check all") {
      setChecks((prevstate) => {
        return prevstate.map((val) => {
          return { name: val.name, checked: true };
        });
      });

      setButtonVal("uncheck all");
    } else {
      setChecks((prevstate) => {
        return prevstate.map((val) => {
          return { name: val.name, checked: false };
        });
      });

      setButtonVal("check all");
    }
  };

  const handleChange = (e) => {
    console.log(e.target.name);

    setChecks((prevstate) => {
      return prevstate.map((val) => {
        if (val.name == e.target.name) {
          return { name: val.name, checked: !val.checked };
        } else {
          return val;
        }
      });
    });
  };

  return (
    <>
      <h4>Check box</h4>

      <form>
        <h4>Liked Generes</h4>

        {checks.map((val) => {
          return (
            <label key={val.name}>
              <input
                type="checkbox"
                name={val.name}
                checked={val.checked}
                onChange={(e) => handleChange(e)}
              />
              {val.name}
            </label>
          );
        })}
        <button onClick={(e) => checkanduncheckAll(e)}>{buttonVal}</button>
      </form>
    </>
  );
};
