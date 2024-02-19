import { useState } from "react";

// export default function Form() {
//   const [name, setName] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//   }
//   function handleChange(event) {
//     event.preventDefault();
//     setName(event.target.value);
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleChange}
//         />
//         <p> Current value is: {name}</p>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// Multiple form fields

export default function Form() {
  const [formValues, setFormValues] = useState({ name: "", email: "" });

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>{" "}
        <input
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
      </form>
      <p>Current name is: {formValues.name}</p>
      <p>Current email is: {formValues.email}</p>
      <button type="submit">Submit</button>
    </div>
  );
}
