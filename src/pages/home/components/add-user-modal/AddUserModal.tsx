import React, { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { useUsers } from "context/UserContext";
import { FormInput } from "@components/form-input/FormInput";
import { CustomSelect } from "@components/custom-select/CustomSelect";
import { getModalStyle, getTitleStyle } from "./AddUserModal.styles";
import { CustomButton } from "@components/custom-button/CustomButton";

interface AddUserModalProps {
  open: boolean;
  onClose: () => void;
}

export const AddUserModal: React.FC<AddUserModalProps> = ({
  open,
  onClose,
}) => {
  const { addUser } = useUsers();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<"Ativo" | "Pendente" | "Banido">(
    "Ativo"
  );

  const userStatus = [
    { label: "Ativo", value: "Ativo" },
    { label: "Pendente", value: "Pendente" },
    { label: "Banido", value: "Banido" },
  ];

  const handleSave = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!username.trim()) newErrors.username = "Username é obrigatório.";
    if (!email.trim()) newErrors.email = "E-mail é obrigatório.";
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Formato de e-mail inválido.";
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const newUser = {
      id: Date.now(),
      name,
      username,
      email,
      status,
    };

    addUser(newUser);
    onClose();

    setName("");
    setUsername("");
    setEmail("");
    setStatus("Ativo");
    setErrors({});
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={getModalStyle()}>
        <Typography sx={getTitleStyle()}>Adicionar novo usuário</Typography>
        <FormInput
          name={name}
          setName={setName}
          error={errors.name}
          placeholder="Nome"
        />
        <FormInput
          name={username}
          setName={setUsername}
          error={errors.username}
          placeholder="Username"
        />
        <FormInput
          name={email}
          setName={setEmail}
          error={errors.email}
          placeholder="E-mail"
        />

        <CustomSelect
          value={status}
          onChange={(value) =>
            setStatus(value as "Ativo" | "Pendente" | "Banido")
          }
          placeholder={"Status"}
          options={userStatus}
          width={"100%"}
        />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <CustomButton text={"Cancelar"} onClick={onClose} />
          <CustomButton text={"Salvar"} onClick={handleSave} />
        </Box>
      </Box>
    </Modal>
  );
};
