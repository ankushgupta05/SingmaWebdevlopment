import { useState } from "react";
import "./App.css";
import { set, useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError, // this is use for custom error
    // formState: { errors },
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    // await delay(2) // simulation newwork delay
    let r = await fetch("http://localhost:3000/", { method: "POST",  headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let res = await r.text();
    console.log(data, res);
    // console.log(data)

    // if(data.username !== "shubham"){ // if server is refused than we can show or write our message to the user
    //   setError("myform",{message:"Your form is not good Orderbcz credentials is invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked",{message:"sorry this user is block"})
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading..</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="username"
            {...register("username", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 3, message: "min Length is 3" },
              maxLength: { value: 8, message: "Max value is 8" },
            })}
            type="text"
          />
          {errors.username && (
            <div className="red">{errors.username.message} </div>
          )}
          {/* {errors.username && <div className='red'>There is some eror in username</div> } */}
          <br />
          <input
            placeholder="userpassword"
            {...register("password", {
              required: { value: true, message: "This field is required" },
              minLength: { value: 8, message: "min Length is 8" },
            })}
            type="password"
          />
          {errors.password && (
            <div className="red">{errors.password.message} </div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myform && (
            <div className="red">{errors.myform.message} </div>
          )}{" "}
          {/* this error is show when server are refused */}
          {errors.blocked && (
            <div className="red">{errors.blocked.message} </div>
          )}{" "}
          {/* this error is show when server are refused */}
        </form>
      </div>
    </>
  );
}

export default App;
