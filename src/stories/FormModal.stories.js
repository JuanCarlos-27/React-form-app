import '../styles/index.scss';
import FormModal from '../components/FormModal';


export default {
    title: 'Components/FormModal',
    component: FormModal,
    tags: ['autodocs'],
};

export const Default = {
    args: {
        dataResume: [
            {
                name: 'firstName',
                placeholder: 'Nombre',
                type: 'text',
                value: 'Juan'
            },
            {
                name: 'lastName',
                placeholder: 'Apellido',
                type: 'text',
                value: 'Perez'
            },
            {
                name: 'email',
                placeholder: 'Email',
                type: 'email',
                value: 'juanperez@gmail.com'
            },
            {
                name: 'phonenumber',
                placeholder: 'Teléfono',
                type: 'number',
                value: '123456789'
            },
            {
                name: 'country',
                placeholder: 'País',
                type: 'text',
                value: 'Argentina'
            },
            {
                name: 'birthdate',
                placeholder: 'Fecha de nacimiento',
                type: 'date',
                value: '1990-01-01'
            }
        ],
        onCancel: () => { 
            console.log('cancel')
        },
    }
}