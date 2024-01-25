import React from "react";
import { AppButton } from "../../components/appElements/appButton";
import { AppInput } from "../../components/appElements/appInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";





export const RegistrationPage = () => {

  
const registrationPageFields = {
  userEmail: "",
  userName: "",
  userPhoneNumber: "",
  userPassword: "",
};


const registrationValidationSchema = yup.object({
  userEmail: yup
    .string()
    .required("Обязательное поле")
    .email("Неправильный e-mail"),
  userName: yup.string().required("Обязательное поле"),
  userPhoneNumber: yup
    .string()
    .required("Обязательное поле")
    .matches(/^9989\d{8}$/, "Номер не валиден"),
  userPassword: yup
    .string()
    .required("Обязательное поле")
    .min(6, "Пароль должен содержать как минимум 6 символов"),
});





  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: registrationPageFields,
    resolver: yupResolver(registrationValidationSchema),
  });

  const navigate = useNavigate();

  const onRegistrationFormSubmit = (data: any) => {
    console.log(data);
    if (data) {
      navigate("/login-page");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onRegistrationFormSubmit)}
        className="flex m-36 flex-col justify-center items-center gap-3"
      >
        <h1 className="text-4xl mb-3  ">Регистрация</h1>
        <Controller
          name="userEmail"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Введите email"
              hasError={!!errors.userEmail}
              errorText={errors.userEmail?.message as string}
              {...field}
            />
          )}
        />
        <Controller
          name="userName"
          control={control}
          render={({ field }) => (
            <AppInput
              type="text"
              placeholder="Введите имя"
              hasError={!!errors.userName}
              errorText={errors.userName?.message as string}
              {...field}
            />
          )}
        />
        <Controller
          name="userPhoneNumber"
          control={control}
          render={({ field }) => (
            <AppInput
              type="tel"
              placeholder="Введите номер телефона"
              hasError={!!errors.userPhoneNumber}
              errorText={errors.userPhoneNumber?.message as string}
              {...field}
            />
          )}
        />
        <Controller
          name="userPassword"
          control={control}
          render={({ field }) => (
            <AppInput
              type="password"
              placeholder="Введите пароль"
              hasError={!!errors.userPassword}
              errorText={errors.userPassword?.message as string}
              {...field}
            />
          )}
        />
        <AppButton type="submit" buttonText="Зарегистрироваться" />
      </form>
    </>
  );
};
