import { toast } from "sonner";

export { default as FormRegister } from "./FormRegister";

export async function PostNewUser(formData) {
  document.getElementById("register-btn-submit").disabled = true;

  const response = await fetch(
    "https://deployreciclame-production.up.railway.app/users/save",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    },
  );

  if (response.ok) {
    toast.success("Usuario registrado con éxito.", {
      action: {
        label: "Iniciar sesión",
        onClick: () => {
          window.location.href = "/login";
        },
      },
      actionButtonStyle: {
        backgroundColor: "#956DE4",
        color: "#fff",
      },
    });
    document.getElementById("form-register").reset();
    document.getElementById("register-btn-submit").disabled = false;
  } else {
    toast.error("Error al registrar usuario.");
    document.getElementById("register-btn-submit").disabled = false;
    console.log(response);
  }
}
