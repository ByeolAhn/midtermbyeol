import { useForm } from "react-hook-form";
import "./signupuser.css"

export default function SignUpUser() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if(data.password !== data.confirmationpassword){
            alert("The password and confirmation password are not matching.");
            console.log("The password and confirmation password are not matching.");
        };
        alert(`First name: ${data.firstname}, Last name: ${data.lastname}, User name: ${data.username}, Email: ${data.email}, Password: ${data.password}, Confirmation Password: ${data.confirmationpassword}`);
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="hook">
            <label className="hook__text">First name: </label>
            <input
                type="text"
                name="firstname"
                className="hook__input"
                {...register("firstname", { required: true })}
            />
            {errors.firstname && (
                <p className="hook__error">First name is required</p>
            )}
            <label className="hook__text">Last name: </label>
            <input
                type="text"
                name="lastname"
                className="hook__input"
                {...register("lastname", { required: true })}
            />
            {errors.lastname && (
                <p className="hook__error">Last name is required</p>
            )}
            <label className="hook__text">User name: </label>
            <input
                type="text"
                name="username"
                className="hook__input"
                {...register("username", { required: true })}
            />
            {errors.username && (
                <p className="hook__error">User name is required</p>
            )}
            <label className="hook__text">Email: </label>
            <input
                type="email"
                className="hook__input"
                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && (
                <p className="hook__error">Email is required and must be valid</p>
            )}

            <label className="hook__text">Password: </label>
            <input
                type="password"
                name="password"
                className="hook__input"
                {...register("password", { required: true })}
            />
            {errors.password && <p className="hook__error">Password is required</p>}

            <label className="hook__text">Confirming Password:</label>
            <input
                type="password"
                name="confirmationpassword"
                className="hook__input"
                {...register("confirmationpassword", { required: true })}
            />
            {errors.confirmationpassword && <p className="hook__error">Confirmation password is required</p>}
            <button className="hook__button" type="submit">
                Submit
            </button>
        </form>
    )
}

