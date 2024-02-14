import * as Yup from "yup";

export const SEARCH = {
  initialValues: {
    date: "",
    from: "",
    to: "",
    people: "",
  },
  validationSchema: Yup.object({
    date: Yup.date()
      .min(new Date(), "Fecha incorrecta")
      .required("Fecha es requerida"),
    from: Yup.string().required("Origen es requerido"),
    to: Yup.string().required("Destino es requerido"),
    people: Yup.number()
      .min(1, "# de Personas debe ser mayor de 1")
      .required("# de Personas es requerido"),
  }),
};
