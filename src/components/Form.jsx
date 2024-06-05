import { useState } from "react";


const Forms = () => {
    const [user, setUser] = useState({
        FullName: "",
        Age: "",
        Gender: "",
        IsMarried: "",
        Country: "",
        Bio: ""
    })
    function CheckHandler(e) {
        const Name = e.target.name;
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUser({
            ...user, [Name]: value
        })
    }
    return (
        <>
            <div className="container">
                <h1 className="header">Form Validation </h1>
                <table>
                    <body>
                        <tr>
                            <td>Name:</td>
                            <td>{user.FullName}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{user.Age}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{user.Gender}</td>
                        </tr>
                        <tr>
                            <td>isMarried:</td>
                            <td>{user.IsMarried ? "Married" : "UnMarried"}</td>
                        </tr>
                        <tr>
                            <td>Country</td>
                            <td>{user.Country}</td>
                        </tr>
                        <tr>
                            <td>Bio</td>
                            <td>{user.Bio}</td>
                        </tr>
                    </body>
                </table>
                <form >
                    <input type="text" name="FullName" id="Your-Name" placeholder="Enter Your FullName..." value={user.FullName} onChange={CheckHandler} />
                    <input type="number" name="Age" id="Your-Age" placeholder="Enter Your Age..." value={user.Age} onChange={CheckHandler} />
                    <div>
                        <label htmlFor="male"> <input id="male" type="radio" value="Male" checked={user.Gender == "Male"} name="Gender" onChange={CheckHandler} />Male</label>
                        <label htmlFor="female"> <input id="female" name="Gender" value="Female" checked={user.Gender == "Female"} type="radio" onChange={CheckHandler} />Female</label>
                    </div>
                    <label htmlFor="marital"><input id="marital" type="checkbox" checked={user.IsMarried} name="IsMarried" onChange={CheckHandler} />Is Married</label>
                    <div>
                        <label htmlFor="country">Select Country :
                            <select onChange={CheckHandler} name="Country" id="country" value={user.Country}>
                                <option value=""></option>
                                <option value="INDIA">INDIA</option>
                                <option value="UK">UK</option>
                                <option value="USA">USA</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <textarea name="Bio" id="Bio" cols={30} rows={5} placeholder="Write Something About You ..." value={user.Bio} onChange={CheckHandler}></textarea>
                    </div>
                </form>

            </div>


        </>
    );
}

export default Forms;