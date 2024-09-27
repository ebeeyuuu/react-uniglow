import React, { useState, useCallback, ChangeEvent } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

type ValidatorFunction = (value: string) => string;

interface Validators {
  [key: string]: ValidatorFunction;
}

interface FieldProps {
  name: keyof FormData;
  label: string;
  type?: string;
  placeholder: string;
}

const Message: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      const validators: Validators = {
        fullName: (value: string) =>
          /\d/.test(value) ? "Full name should not contain numbers" : "",
        email: (value: string) =>
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ? ""
            : "Please enter a valid email address",
        phone: (value: string) =>
          /^\+?[1-9]\d{1,14}$/.test(value)
            ? ""
            : "Please enter a valid phone number",
      };
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (validators[name]) {
        const error = validators[name](value);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [],
  );

  const renderField = useCallback(
    ({ name, label, type = "text", placeholder }: FieldProps) => (
      <div className="flex flex-col gap-y-[10px]" key={name}>
        <div className="font-bold text-sm md:text-base lg:text-lg">{label}</div>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder}
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] h-[150px] rounded-[10px] bg-[#004fa3] placeholder-white resize-none max-[900px]:w-full"
            value={formData[name]}
            onChange={handleChange}
          />
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            className="w-1/2 p-3 text-sm min-w-[300px] max-w-[400px] rounded-[10px] bg-[#004fa3] placeholder-white max-[900px]:w-full"
            value={formData[name]}
            onChange={handleChange}
          />
        )}
        {errors[name] && (
          <div className="text-[#ff7f00] text-sm mt-1 font-bold">
            {errors[name]}
          </div>
        )}
      </div>
    ),
    [formData, errors, handleChange],
  );

  return (
    <div className="mt-[40px] max-[700px]:w-full">
      <div className="flex flex-col gap-y-[20px] w-[100%]">
        {renderField({
          name: "fullName",
          label: "Full name",
          placeholder: "Enter your full name here",
        })}
        {renderField({
          name: "email",
          label: "Email address",
          placeholder: "Enter your email address here",
        })}
        {renderField({
          name: "phone",
          label: "Contact number",
          placeholder: "Enter your contact number here",
        })}
        {renderField({
          name: "message",
          label: "Message",
          type: "textarea",
          placeholder: "Enter your message here",
        })}
      </div>
    </div>
  );
};

export default Message;
