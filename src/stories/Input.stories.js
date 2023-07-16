import { Field } from 'formik';
import '../styles/index.scss';

export default {
    title: 'Components/Input',
    component: Field
};

export const Default = {
    args: {
        type: 'text',
        placeholder: 'Enter your name',
        name: 'name',
        required: true,
    }
}

export const Password = {
    args: {
        type: 'password',
        placeholder: 'Enter your password',
        name: 'password',
        required: true,
    }
}
