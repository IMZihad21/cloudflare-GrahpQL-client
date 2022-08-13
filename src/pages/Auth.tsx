import { useMutation } from "@apollo/client";
import { LoadingButton } from "@mui/lab";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SIGN_IN } from "../configs/mutations";
import apolloClient from "../utils/apolloClient";

const Auth = () => {
  const [newUser, setNewUser] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [signIn, { loading: signInLoading }] = useMutation(SIGN_IN);

  const onSubmit = async (data: Object) => {
    const { data: { signin } = {} } = await signIn({ variables: { ...data } });
    if (signin) {
      localStorage.setItem("accessToken", signin?.accessToken);
      localStorage.setItem("refreshToken", signin?.refreshToken);

      apolloClient.resetStore();
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        px: { xs: "2rem", md: "20rem" },
        my: 5,
      }}
    >
      {newUser && (
        <TextField
          fullWidth
          label="Name"
          error={Boolean(errors.name)}
          helperText={!!errors.name && "Name is required"}
          {...register("name", { required: true })}
        />
      )}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        error={Boolean(errors.email)}
        helperText={!!errors.email && "Email is required"}
        {...register("email", {
          required: true,
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Invalid Email Address",
          },
        })}
      />
      <TextField
        fullWidth
        label="Password"
        variant="outlined"
        type="password"
        error={Boolean(errors.password)}
        helperText={
          !!errors.password &&
          ((errors.password.message as string) || "Password is required")
        }
        {...register("password", {
          required: true,
          pattern: {
            value: newUser
              ? /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
              : /^.{8,50}$/,
            message: newUser
              ? "Password must contain at least one uppercase, one lowercase, one number and one special character"
              : "Password should be at least 8 characters long and not more than 50 characters long",
          },
        })}
      />
      {newUser && (
        <TextField
          fullWidth
          label="Confirm Password"
          variant="outlined"
          type="password"
          error={Boolean(errors.confirmPassword)}
          helperText={
            !!errors.confirmPassword &&
            ((errors.confirmPassword.message as string) ||
              "Confirm Password is required")
          }
          {...register("confirmPassword", {
            required: true,
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Your passwords do no match";
              }
              return true;
            },
          })}
        />
      )}
      <LoadingButton
        loading={signInLoading}
        type="submit"
        variant="contained"
        sx={{
          py: "10px",
        }}
      >
        {newUser ? "Sign Up" : "Sign In"}
      </LoadingButton>
      <Button
        onClick={() => {
          setNewUser(!newUser);
          //   setError(null);
        }}
        sx={{
          color: "black",
          fontSize: "0.9rem",
        }}
      >
        {newUser ? "Already have an account?" : "Create an account"}
      </Button>
    </Box>
  );
};

export default Auth;
