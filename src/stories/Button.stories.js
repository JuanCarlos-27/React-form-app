import Button from '../components/Button';
import '../styles/index.scss';

export default {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
};

export const Primary = {
    args: {
        type: 'submit',
        children: 'Submit',
        background: '#0084ff',
        color: '#fff',
    }
}

export const Secondary = {
    args: {
        type: 'button',
        children: 'Cancel',
        background: '#585858',
        color: '#fff',
    }
}

