import React from 'react';
import { useForm } from "react-hook-form";

const OrderPlaced = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true })} placeholder="First name" /><br />

                <input {...register("lastName", { minLength: 2 })} placeholder="Last name" /><br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default OrderPlaced;