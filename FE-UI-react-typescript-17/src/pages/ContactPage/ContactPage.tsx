import React from "react";
import { useForm } from "react-hook-form";
import type { FormData } from "../../interface";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import HeadTitle from "../../components/HeadTitle/HeadTitle";

const schema = z.object({
  name: z.string().min(2, "Name should be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message should be at least 5 characters"),
});

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert(
      `Message sent!\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    );
  };

  return (
    <div className="container">
      <HeadTitle className="">Contact Us</HeadTitle>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label>Name:</label>
          <input {...register("name")} />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>Message:</label>
          <textarea {...register("message")} />
          {errors.message && (
            <p style={{ color: "red" }}>{errors.message.message}</p>
          )}
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
