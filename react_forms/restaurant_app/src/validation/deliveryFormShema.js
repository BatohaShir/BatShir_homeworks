import { z } from "zod";

export const deliveryFormShema = z.object({
  firstname: z.string().min(1, 'Имя не может быть пустым или состоять из одной буквы!'),
  phone: z.string().regex(/^(\+7|8)\d{10}$/, 'Введите корректный номер телефона!'),
  adress: z.string().min(1, 'Обязательно для заполнения!'),
  lastname: z.string().min(1, 'Фамилия не может быть пустым или состоять из одной буквы!'),
  post: z.string().regex(/^\d{6}$/, 'Введите корректный почтовый индекс (6 цифр)!'),
  city: z.string().min(1, 'Обязательно для заполнения!'),
  region: z.string().nonempty('Пожалуйста, выберите регион!')
    .refine(value => value !== '-Выберите регион-', {
      message: 'Пожалуйста, выберите регион!',
    }),
});
