import { useState } from "react";

const Forms = () => {
    const [user, setUser] = useState({
        name: "Hari",
        age: 27,
        gender: "male",
        isMarried: false,
    })
    return (
        <>
            <form>
                <table>
                    <body>
                        <tr>
                            <td>Name:</td>
                            <td>{user.name}</td>
                        </tr>
                        <tr>
                            <td>Age:</td>
                            <td>{user.age}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{user.gender}</td>
                        </tr>
                        <tr>
                            <td>isMarried:</td>
                            <td>{user.isMarried ? "married" : "unMarried"}</td>
                        </tr>
                    </body>
                </table>
            </form>
        </>
    );
}

export default Forms;