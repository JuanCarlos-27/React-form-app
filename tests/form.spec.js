// @ts-check
import { test, expect } from '@playwright/test';

const URL = 'http://localhost:5173/';
const INITIAL_STATE_FORM = [
  {
    stepName: 'Nombres',
    cardTitle: '¿Como te llamas?',
    isCurrentStep: true,
    isBlocked: false,
    isChecked: false,
    fields: [
      {
        name: 'firstName',
        placeholder: 'Nombre',
        type: 'text',
        value: ''
      },
      {
        name: 'lastName',
        placeholder: 'Apellido',
        type: 'text',
        value: ''
      }
    ]
  },
  {
    stepName: 'Email',
    cardTitle: 'Ingresa tu correo electronico',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'email',
        placeholder: 'Correo electrónico',
        type: 'email',
        value: ''
      }
    ]
  },
  {
    stepName: 'Teléfono',
    cardTitle: 'Ingresa tu número de contacto',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'phoneNumber',
        placeholder: 'Teléfono',
        type: 'number',
        value: ''
      }
    ]
  },
  {
    stepName: 'País',
    cardTitle: 'Selecciona tu país de nacimiento',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'country',
        placeholder: 'País',
        type: 'select',
        value: ''
      }
    ]
  },
  {
    stepName: 'Fecha',
    cardTitle: 'Seleccione su fecha de nacimiento',
    isCurrentStep: false,
    isBlocked: true,
    isChecked: false,
    fields: [
      {
        name: 'bithDate',
        placeholder: 'Fecha de nacimiento',
        type: 'date',
        value: ''
      }
    ]
  }
];

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

test('should have the rigth title', async ({ page }) => {
  await expect(page).toHaveTitle('Formulario');
});

test('should have the rigth amount of steps', async ({ page }) => {
  const initialStepsLength = INITIAL_STATE_FORM.length;
  const steps = await page.$$('.step-wrapper');
  await expect(steps).toHaveLength(initialStepsLength);
});

test('should first step have to be available', async ({ page }) => {
  const firstStep = await page.locator('.step-wrapper').first();
  await expect(firstStep).not.toHaveClass('step-wrapper-blocked');
});

test('should rest of steps to be blocked', async ({ page }) => {
  const steps = await page.locator('.step-wrapper').all();
  for (const step of steps.slice(1)) {
    await expect(step).toHaveClass('step-wrapper step-wrapper-blocked');
  }
});

test('should not allow to continue if the fields are empty', async ({ page }) => {
  const nextButton = await page.$('button[type="submit"]');
  await nextButton?.click();
  const steps = await page.locator('.step-wrapper').all();
  for (const step of steps.slice(1)) {
    await expect(step).toHaveClass('step-wrapper step-wrapper-blocked');
  }
});

test('should display a validation message when a field is focused and then blur', async ({ page }) => {
  const input = await page.locator('.card-form input').first();
  await input.focus();
  await input.blur();
  const errorMessage = await page.locator('.validation-error').first();
  await expect(errorMessage).toHaveClass('validation-error');
});

test('should allow to continue if the fields are fill', async ({ page }) => {
  const nextButton = await page.$('button[type="submit"]');
  const firstNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[0].placeholder);
  const lastNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[1].placeholder);

  await firstNameInput?.fill('Juan');
  await lastNameInput?.fill('Perez');

  await nextButton?.click();

  const steps = await page.locator('.step-wrapper').all();
  for (const step of steps.slice(0, 2)) {
    await expect(step).not.toHaveClass('step-wrapper-blocked');
  }
});

test('should allow to go back in the form', async ({ page }) => {
  const nextButton = await page.$('button[type="submit"]');
  const firstNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[0].placeholder);
  const lastNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[1].placeholder);

  await firstNameInput?.fill('Juan');
  await lastNameInput?.fill('Perez');

  await nextButton?.click();

  const backButton = await page.$('button[type="button"]');
  await backButton?.click();

  const titleCardForm = await page.locator('.card-form h1');

  await expect(titleCardForm).toHaveText(INITIAL_STATE_FORM[0].cardTitle);
});

test('should navigate through forms by clicking in the step label', async ({ page }) => {
  const nextButton = await page.$('button[type="submit"]');
  const firstNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[0].placeholder);
  const lastNameInput = await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[1].placeholder);

  await firstNameInput?.fill('Juan');
  await lastNameInput?.fill('Perez');
  await nextButton?.click();

  const nextEmailButton = await page.$('button[type="submit"]');

  const emailInput = await page.getByPlaceholder(INITIAL_STATE_FORM[1].fields[0].placeholder);
  await emailInput?.fill('juanperez@gmail.com');
  await nextEmailButton?.click();

  const phoneNumberInput = await page.getByPlaceholder(INITIAL_STATE_FORM[2].fields[0].placeholder);
  await phoneNumberInput?.fill('123456789');

  const titleCardForm = await page.locator('.card-form h1');
  const steps = await page.locator('.step-wrapper').all();

  await expect(titleCardForm).toHaveText(INITIAL_STATE_FORM[2].cardTitle);

  steps[1].click();
  await expect(titleCardForm).toHaveText(INITIAL_STATE_FORM[1].cardTitle);

  steps[0].click();
  await expect(titleCardForm).toHaveText(INITIAL_STATE_FORM[0].cardTitle);

  steps[2].click();
  await expect(titleCardForm).toHaveText(INITIAL_STATE_FORM[2].cardTitle);
});

test('should display a confirmation modal when all steps are completed', async ({ page }) => {
  const mockInfo = {
    firstName: 'Juan',
    lastName: 'Perez',
    email: 'juanperez@gmail.com',
    phoneNumber: '123456789',
    country: 'Colombia',
    birthDate: '1990-01-01'
  };

  // Rellena el primer paso del formulario y da click en el botón de siguiente
  const nextButton = await page.$('button[type="submit"]');
  await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[0].placeholder).fill(mockInfo.firstName);
  await page.getByPlaceholder(INITIAL_STATE_FORM[0].fields[1].placeholder).fill(mockInfo.lastName);
  await nextButton?.click();

  // Rellena el segundo paso del formulario y da click en el botón de siguiente
  const nextEmailButton = await page.$('button[type="submit"]');
  await page.getByPlaceholder(INITIAL_STATE_FORM[1].fields[0].placeholder)?.fill(mockInfo.email);
  await nextEmailButton?.click();

  // Rellena el tercer paso del formulario y da click en el botón de siguiente
  const nextPhoneNumberButton = await page.$('button[type="submit"]');
  await page.getByPlaceholder(INITIAL_STATE_FORM[2].fields[0].placeholder)?.fill(mockInfo.phoneNumber);
  await nextPhoneNumberButton?.click();

  // Rellena el cuarto paso del formulario y da click en el botón de siguiente
  const nextCountryButton = await page.$('button[type="submit"]');
  const selectElement = await page.$('select');
  await selectElement?.selectOption({ label: mockInfo.country });
  await nextCountryButton?.click();

  // Rellena el quinto paso del formulario y da click en el botón de siguiente
  const nextBirthDateButton = await page.$('button[type="submit"]');
  await page.getByPlaceholder(INITIAL_STATE_FORM[4].fields[0].placeholder)?.fill(mockInfo.birthDate);
  await nextBirthDateButton?.click();

  // Verificar la aparición del modal de confirmación
  const modal = await page.locator('.modal .modal-resume div > span').all();

  // Verificar los datos en el modal de confirmación
  await expect(modal[0]).toHaveText(mockInfo.firstName);
  await expect(modal[1]).toHaveText(mockInfo.lastName);
  await expect(modal[2]).toHaveText(mockInfo.email);
  await expect(modal[3]).toHaveText(mockInfo.phoneNumber);
  await expect(modal[4]).toHaveText(mockInfo.country);
  await expect(modal[5]).toHaveText(mockInfo.birthDate);
});
