const nameFilterOptions = [
  { label: "Sem filtro", value: "" },
  { label: "Alfabetica", value: "alph" },
  { label: "Crescente", value: "asc" },
  { label: "Decrescente", value: "desc" },
];

const statusFilterOptions = [
  { label: "Sem filtro", value: "" },
  { label: "Banido", value: "Banido" },
  { label: "Pendente", value: "Pendente" },
  { label: "Ativo", value: "Ativo" },
];

export const filterConfigs = [
  { key: "order", placeholder: "Nome", options: nameFilterOptions },
  { key: "status", placeholder: "Status", options: statusFilterOptions },
] as const;
