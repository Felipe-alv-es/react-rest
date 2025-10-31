const nameFilterOptions = [
  { label: "Sem filtro", value: "" },
  { label: "Alfabetica", value: "alph" },
  { label: "Crescente", value: "asc" },
  { label: "Decrescente", value: "desc" },
];

const emailFilterOptions = [
  { label: "Sem filtro", value: "" },
  { label: "Alfabetica", value: "alph" },
  { label: "Crescente", value: "asc" },
  { label: "Decrescente", value: "desc" },
];

const statusFilterOptions = [
  { label: "Sem filtro", value: "" },
  { label: "Banido", value: "ban" },
  { label: "Pendente", value: "pend" },
  { label: "Disponível", value: "disp" },
];

export const filterConfigs = [
  { key: "order", placeholder: "Nome", options: nameFilterOptions },
  { key: "status", placeholder: "Status", options: statusFilterOptions },
  { key: "email", placeholder: "Email", options: emailFilterOptions },
] as const;
