import "./Signup.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

function SignupForm() {
  const [currentUser, setCurrentUser] = useState(null);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconfirm, setPasswordConfirm] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const performNavigate = async () => {
      try {
        await client
          .get("/userapi/user")
          .then(() => {
            setCurrentUser(true);
            navigate("/homepage");
          })
          .catch(() => {
            setCurrentUser(false);
          });
      } catch (error) {
        console.error("Error logging out:", error);
      }
    };

    performNavigate();
  }, [navigate]);

  function isValid(p) {
    var phoneRe = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var digits = p.replace(/\D/g, "");
    return phoneRe.test(digits);
  }

  const validate = () => {
    if (!username.trim()) return "Username is required";
    if (!fullname.trim()) return "Full name is required";
    if (!email.trim()) {
      return "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return "Email is invalid";
    }
    if (!phone.trim()) return "Phone number is required";
    if (!isValid(phone)) return "Phone number is invalid";
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters";
    }
    if (!passwordconfirm) {
      return "Password confirmation is required";
    } else if (password !== passwordconfirm) {
      return "Passwords do not match";
    }

    return "Valid";
  };

  function submit(e) {
    if (validate() === "Valid") {
      e.preventDefault();
      client
        .post("/userapi/register", {
          email: email,
          username: username,
          fullname: fullname,
          phone: phone,
          password: password,
        })
        .then(() => {
          client
            .post("/userapi/login", {
              email: email,
              password: password,
            })
            .then(() => {
              setCurrentUser(true);
              setErrorMessage(null);
              navigate("/homepage");
            })
            .catch((error) => {
              if (error.response.status === 403) {
                setErrorMessage("You are already logged in!");
                navigate("/homepage");
              } else {
                setErrorMessage(error.response.data.message);
              }
            });
        })
        .catch((error) => {
          if (error.response.status === 403) {
            setErrorMessage("You are already logged in!");
            navigate("/homepage");
          } else {
            setErrorMessage(error.response.data.message);
          }
        });
    } else {
      if (passwordconfirm) {
        e.preventDefault();
      }
      let ab = validate();
      if (
        ab === "Password must be at least 8 characters" ||
        ab === "Passwords do not match" ||
        ab === "Phone number is invalid" ||
        ab === "Email is invalid"
      ) {
        setErrorMessage(ab);
      } else {
        setErrorMessage("");
      }
    }
  }

  if (!currentUser) {
    return (
      <div id="SignupWrapper">
        <form>
          <div className="form-container slideRight-animation">
            <h1 className="form-header">
              Get started{" "}
              {errorMessage && (
                <div
                  style={{ color: "red", marginBottom: "0px", fontSize: 23 }}
                >
                  {errorMessage}
                </div>
              )}
            </h1>

            <div className="input-container">
              <input
                className="input"
                type="text"
                name="f-name"
                id="f-name"
                style={{ color: "black" }}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <span>Username</span>
              <div className="error"></div>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="text"
                name="l-name"
                id="l-name"
                onChange={(e) => setFullname(e.target.value)}
                required
              />
              <span>First name</span>
              <div className="error"></div>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="email"
                name="mail"
                id="mail"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span>E-mail</span>
              <div className="error"></div>
            </div>

            <div className="input-container">
              <input
                className="input"
                type="tel"
                name="phone"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <span>Phone</span>
              <div className="error"></div>
            </div>

            <div className="input-container">
              <input
                type="password"
                name="user-password"
                id="user-password"
                className="user-password input"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span>Password</span>
              <div className="error"></div>
            </div>

            <div className="input-container">
              <input
                type="password"
                name="user-password-confirm"
                id="user-password-confirm"
                className="password-confirmation input"
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
              <span>Confirm Password</span>
              <div className="error"></div>
            </div>

            <div id="btm">
              <button type="submit" onClick={submit} className="submit-btn">
                Create Account
              </button>
              <p className="btm-text">
                Already have an account..?{" "}
                <span className="btm-text-highlighted">
                  <a className="btm-text-highlighted" href="login">
                    Log in
                  </a>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
