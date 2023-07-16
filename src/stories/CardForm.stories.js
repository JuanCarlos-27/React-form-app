import '../styles/index.scss';
import CardForm from '../components/CardForm';

export default {
    title: 'Components/CardForm',
    component: CardForm,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        label: 'Nombre de la tarjeta',
        stepName: 'step1',
        fields: [
            {
                "name": "firstName",
                "placeholder": "Nombre",
                "type": "text",
                "value": ""
            }
        ]
    }
}