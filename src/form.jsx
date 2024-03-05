import styles from "./form.module.css";
import { FaEyeSlash } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";
const Form = () => {
  function displayout(event, value) {
    const passwordinputtag = document.getElementById("password");
    if (event.currentTarget.id === "one") {
      {
        document.getElementById("two").style.display = "block";
      }

      {
        document.getElementById("one").style.display = "none";
      }
      passwordinputtag.type = "text";
    } else {
      {
        document.getElementById("two").style.display = "none";
      }

      {
        document.getElementById("one").style.display = "block";
      }
      passwordinputtag.type = "password";
    }
  }
  function submitForm(event) {
    event.preventDefault();
    const keys = Object.keys(event.target);
    keys.forEach((key, index) => {
      if (index >= 0 && index < 4) {
        console.log(event.target[key].value);
      }
    });
  }

  return (
    <form action="" className={styles.form} onSubmit={submitForm}>
      <h1 className={styles.heading}>Submit Form</h1>
      <div className={styles.eachinput}>
        <label htmlFor="name" className={styles.label}>
          Enter Name :
        </label>
        <input type="text" className={styles.input} />
      </div>

      <div className={styles.eachinput}>
        <label htmlFor="email" className={styles.label}>
          Enter Email :
        </label>
        <input type="email" className={styles.input} />
      </div>

      <div className={styles.eachinput}>
        <label htmlFor="" className={styles.label}>
          Enter Password :
        </label>
        <div className={styles.cover}>
          <input id="password" type="password" className={styles.input} />
          <div className={styles.img}>
            <FaEyeSlash
              id="one"
              className={styles.icon}
              onClick={(event) => {
                displayout(event);
              }}
            />
            <LiaEyeSolid
              id="two"
              className={`${styles.icon} ${styles.LiaEyeSolid}`}
              onClick={(event) => {
                displayout(event);
              }}
            />
          </div>
        </div>
      </div>

      <div className={styles.eachinput}>
        <label htmlFor="" className={styles.label}>
          Enter Dob :
        </label>
        <input type="date" className={styles.input} />
      </div>

      <button type="submit" className={styles.submitbutton}>
        Submit Form
      </button>
    </form>
  );
};
export default Form;
