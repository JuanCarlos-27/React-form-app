import Step from "../components/Step"
import '../styles/index.scss';


export default {
    title: 'Components/Step',
    component: Step,
    tags: ['autodocs'],
};

export const Current = {
    args: {
        stepLabel: 'Paso 1',
        isCurrentStep: true,
        isBlockedStep: false,
        isChecked: false,
    }
}

export const Checked = {
    args: {
        stepLabel: 'Paso 2',
        isCurrentStep: false,
        isBlockedStep: false,
        isChecked: true,
    }
}

export const Blocked = {
    args: {
        stepLabel: 'Paso 3',
        isCurrentStep: false,
        isBlockedStep: true,
        isChecked: false,
    },
};