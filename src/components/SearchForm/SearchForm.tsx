import { FormControl, Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useFormik } from "formik";

import { SEARCH } from "../../libs/formik/forms";
import { cities } from "../../constants/cities";
import "./SearchForm.scss";

const flatCities = Object.keys(cities)
  .map((state) =>
    cities[state].map((city: string) => {
      return `${state}-${city}`;
    })
  )
  .flat();

const SearchForm = () => {
  const { initialValues, validationSchema } = SEARCH;
  const { handleChange, handleBlur, handleSubmit, values, setFieldValue } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        console.log("VAL => ", values);
      },
    });

  return (
    <form id="home-search-form" onSubmit={handleSubmit}>
      <ul>
        <li>
          <FormControl fullWidth>
            <DatePicker
              name="date"
              label="Fecha"
              format="DD/MM/YYYY"
              onChange={(e) => setFieldValue("date", e?.toString())}
              value={values.date || null}
              disablePast
            />
          </FormControl>
        </li>
        <li>
          <FormControl fullWidth>
            <Autocomplete
              id="from"
              onChange={(e, value) => setFieldValue("from", value)}
              onBlur={handleBlur}
              value={values.from || null}
              disablePortal
              options={flatCities}
              groupBy={(option) => option.split("-")[0]}
              getOptionLabel={(option) => option.split("-")[1]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Origen" />
              )}
            />
          </FormControl>
        </li>
        <li>
          <FormControl fullWidth>
            <Autocomplete
              id="to"
              onChange={(e, value) => setFieldValue("to", value)}
              onBlur={handleBlur}
              value={values.to || null}
              options={flatCities}
              groupBy={(option) => option.split("-")[0]}
              getOptionLabel={(option) => option.split("-")[1]}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Destino" />
              )}
            />
          </FormControl>
        </li>
        <li>
          <FormControl fullWidth>
            <TextField
              name="people"
              type="number"
              label="# Personas"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.people}
            />
          </FormControl>
        </li>
        <li className="search-form-footer">
          <button type="submit" className="secundary">
            Buscar Viaje
          </button>
        </li>
      </ul>
    </form>
  );
};

export default SearchForm;
