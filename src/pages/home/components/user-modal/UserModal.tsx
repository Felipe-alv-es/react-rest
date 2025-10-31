import React, { useState, useEffect } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { FormInput } from "@components/form-input/FormInput";
import { CustomSelect } from "@components/custom-select/CustomSelect";
import { getModalStyle, getTitleStyle } from "./UserModal.styles";
import { CustomButton } from "@components/custom-button/CustomButton";
import { User } from "context/types";

interface UserModalProps {
  open: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  addUser?: (newUser: User) => void;
  editUser?: (updatedUser: User) => void;
  user?: User | null;
}

export const UserModal: React.FC<UserModalProps> = ({
  open,
  onClose,
  mode,
  addUser,
  editUser,
  user,
}) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"Ativo" | "Pendente" | "Banido">(
    "Ativo"
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const userStatus = [
    { label: "Ativo", value: "Ativo" },
    { label: "Pendente", value: "Pendente" },
    { label: "Banido", value: "Banido" },
  ];

  useEffect(() => {
    if (mode === "edit" && user) {
      setName(user.name);
      setUsername(user.username);
      setEmail(user.email);
      setStatus(user.status as "Ativo" | "Pendente" | "Banido");
    } else {
      setName("");
      setUsername("");
      setEmail("");
      setStatus("Ativo");
    }
  }, [mode, user]);

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

    if (mode === "add" && addUser) {
      const newUser = {
        id: Date.now(),
        name,
        username,
        email,
        status,
      };
      addUser(newUser);
    }

    if (mode === "edit" && editUser && user) {
      const updatedUser = {
        ...user,
        name,
        username,
        email,
        status,
      };
      editUser(updatedUser);
    }

    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={getModalStyle()}>
        <Typography sx={getTitleStyle()}>
          {mode === "add" ? "Adicionar novo usuário" : "Editar usuário"}
        </Typography>

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
          placeholder="Status"
          options={userStatus}
          width="100%"
        />

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <CustomButton text="Cancelar" onClick={onClose} />
          <CustomButton
            text={mode === "add" ? "Salvar" : "Atualizar"}
            onClick={handleSave}
          />
        </Box>
      </Box>
    </Modal>
  );
};
