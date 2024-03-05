import { toast } from "sonner";
import { redirect } from "next/navigation";

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
    const data = await response.json();

    toast.success("Usuario registrado con éxito.", {
      action: {
        label: "Iniciar sesión",
        onClick: () => redirect("/login"),
      },
      actionButtonStyle: {
        backgroundColor: "#956DE4",
        color: "#fff",
      },
    });
    document.getElementById("form-register").reset();
    document.getElementById("register-btn-submit").disabled = false;
    
    return data;
  } else {
    toast.error("Error al registrar usuario.");
    document.getElementById("register-btn-submit").disabled = false;
  }
}
