import React from "react";
import { FormProvider } from "../src/context/form";
import { Formik, FormikProvider } from "formik";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <FormProvider>
      <Formik>
        <Story />
      </Formik>
    </FormProvider>
  ),
];

export default preview;
