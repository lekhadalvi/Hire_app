import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "./Context";

export default function FormPage() {
  const { addForm } = useContext(DataContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await addForm(data);   
      reset();
    } catch (error) {
      alert("Something went wrong!");
      reset();
    }
  };

  return (
    <div className="bg-[#FFD833] min-h-screen p-10">
      <h1 className="text-center font-bold text-3xl">
        Hire Talents from India Without Compromise
      </h1>

      <p className="text-center mb-10 text-lg">
        India isn't just about cost savings anymore. It's where top talents power
        the world's top tech companies.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div>
            <input
              {...register("fullname", { required: "Full name is required" })}
              placeholder="Full name*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.fullname && (
              <p className="text-red-600 text-sm mt-1">
                {errors.fullname.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("roles", { required: "Role is required" })}
              placeholder="What are these role(s)?*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.roles && (
              <p className="text-red-600 text-sm mt-1">
                {errors.roles.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("phone", { required: "Phone number is required" })}
              placeholder="Phone number*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("budget", { required: "Budget is required" })}
              placeholder="What's your budget?*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.budget && (
              <p className="text-red-600 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Work email*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("talents", { required: "Number of talents required" })}
              placeholder="How many talents are you looking to hire?*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.talents && (
              <p className="text-red-600 text-sm mt-1">
                {errors.talents.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("additionalInfo")}
              placeholder="Any additional information?"
              className="p-3 rounded-lg w-full border outline-none"
            />
          </div>

          <div>
            <input
              {...register("persona", { required: "Persona is required" })}
              placeholder="What persona best fits your requirements?*"
              className="p-3 rounded-lg w-full border outline-none"
            />
            {errors.persona && (
              <p className="text-red-600 text-sm mt-1">
                {errors.persona.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="block mx-auto px-10 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
