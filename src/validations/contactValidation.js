import * as Yup from 'yup';


export const contactSchema = Yup.object().shape({
    fullname : Yup.string().required('نام و نام خانوادگی الزامی میباشد'),
    photo : Yup.string().required('عکس الزامی میباشد'),
    mobile : Yup.number().required('شماره تلفن همراه الزامی میباشد').positive().integer(),
    email : Yup.string().email().required('ایمیل الزامی میباشد'),
    job : Yup.string().nullable(),
    group : Yup.string().required('انتخاب گروه الزامی میباشد')
})




