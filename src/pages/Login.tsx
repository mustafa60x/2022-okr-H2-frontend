import { useState } from "react";
import Container from "../components/Container";
import NavbarNoAuth from "../components/NavbarNoAuth";

const Login = () => {
  const genders = [
    {
      key: "1",
      value: "Erkek",
    },
    {
      key: "2",
      value: "Kadın",
    },
  ];
  const categoryList = [
    {
      key: 1,
      value: "PHP",
    },
    {
      key: 2,
      value: "JavaScript",
    },
    {
      key: 3,
      value: "CSS",
    },

    {
      key: 4,
      value: "HTML",
    },
  ];

  const [name, setName] = useState("mustafa");
  const [gender, setGender] = useState("");
  const [categories, setCategories] = useState([2, 4]);

  const selectedGender = genders.find((g) => g.key === gender);

  return (
    <>
      <div>
        <NavbarNoAuth></NavbarNoAuth>
      </div>

      <div className="main">
        <Container>
          <h1>Login Page</h1>

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            <br />
            {name}
            <br />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Seçin</option>
              {genders.map((gender) => (
                <option value={gender.key} key={gender.key}>
                  {gender.value}
                </option>
              ))}
            </select>{" "}
            <br />
            <pre>{JSON.stringify(selectedGender, null, 2)}</pre>
            <br />
            <button onClick={() => setCategories([2, 3, 4])}>
              Kategorileri Seç
            </button>
            <label htmlFor="categories">Choose a category:</label>
            <select
              id="categories"
              name="categories"
              value={categories}
              multiple
              onChange={(e) =>
                setCategories(
                  [...e.target.selectedOptions].map((option) => +option.value)
                )
              }
            >
              {categoryList.map((category) => (
                <option value={category.key} key={category.key}>
                  {category.value}
                </option>
              ))}
            </select>
            <br />
            <pre>{JSON.stringify(categories, null, 2)}</pre>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
