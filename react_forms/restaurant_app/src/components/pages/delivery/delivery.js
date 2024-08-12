import { useShopCart } from "../../../store/cart";
import { SiteHeader } from "../../header/header";
import { deliveryFormShema } from "../../../validation/deliveryFormShema";
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';

export function Delivery() {
  const { shopcart } = useShopCart();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: zodResolver(deliveryFormShema)
  }
    
  )
  const onSubmit = (data) => {
    //здесь реализуем отправку данных
    console.log(data)
}
//   const [ fisrtname, setFirstname ] = useState("");
//   const [ lastname, setLastname] = useState("");
//   const [ adress, setAdress ]  = useState("");
//   const [ phone, setPhone ]  = useState("");
//   const [country, setCountry ] = useState("");
//   const [ post, setPost ]= useState("");
//   const [ gorod, setGorod ] = useState("");
//   const [ region, setRegion ]  = useState("");
//   const [errors, setErrors] = useState([]);
//   const [errorString, setErrorString] = useState("");
//   useEffect (() => {
//     const dataObj = {
//         fisrtname,
//         phone,
//     };
//     const validationResult = deliveryFormShema.safeParse(dataObj)
//     if (validationResult.success) {
//         setErrors({})
//     }else {
//         setErrorString(validationResult.error.issues.map((item) => item.message).join("\n"))
//     }
//   }, [fisrtname, lastname, adress, phone, country, post, gorod, region]);
  
//   const onSubmit = (event) => {
//     event.preventDefault();
//     // const form = event.target;
//     // const formData = new FormData(form);
//     // const fisrtname = formData.get("name");
//     // const lasname =  formData.get("surname");
//     // const adress =  formData.get("address");
//     // const country = formData.get("country");
//     // const post =  formData.get("post");
//     // const gorod =  formData.get("city");
//     // const region =  formData.get("region")
//     console.log(fisrtname)
//     console.log(lastname)
//     console.log(adress)
//     console.log(country)
//     console.log(post)
//     console.log(region)

//   }
  return (
    <div className="m-0">
      <SiteHeader />
      <div className="max-w-4xl px-[10vw] pt-8 mx-auto h-screen">
        <h1 className="mb-[26px] text-center font-bold text-lg">Оформление доставки</h1>
        <p className="text-gray-400">Пожалуйста введите информацию для оформления доставки.</p>
        <hr className="h-[1px] w-full bg-gray-500 border-0 mt-8 mb-8"/>
        <form className="grid gap-[16px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 grid-cols-2">
                <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                    <span className="text-gray-600 text-xs font-light uppercase mb-1">Имя</span>
                    <input {...register("firstname")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                    {!!errors.firstname && <div className="text-red-500 text-xs font-medium">{errors.firstname.message}</div>}
                </label>
                <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                    <span className="text-gray-600 text-xs font-light uppercase mb-1">Фамилия</span>
                    <input {...register("lastname")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                    {!!errors.lastname && <div className="text-red-500 text-xs font-medium">{errors.lastname.message}</div>}
                </label>
            </div>
            <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                <span className="text-gray-600 text-xs font-light uppercase mb-1">Адрес</span>
                <input {...register("adress")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                {!!errors.adress && <div className="text-red-500 text-xs font-medium">{errors.adress.message}</div>}
            </label>
            <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                <span className="text-gray-600 text-xs font-light uppercase mb-1">Номер телефона</span>
                <input {...register("phone")} type="te" className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                {!!errors.phone && <div className="text-red-500 text-xs font-medium">{errors.phone.message}</div>}
            </label>
            <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                <span className="text-gray-600 text-xs font-light uppercase mb-1">Страна</span>
                <select {...register("country")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent">
                    <option value=""></option>
                    <option value="RuS">Российская Федерация</option>
                </select>
            </label>
            <div className="grid gap-4 grid-cols-3">
                <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                    <span className="text-gray-600 text-xs font-light uppercase mb-1">Индекс</span>
                    <input {...register("post")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                    {!!errors.post && <div className="text-red-500 text-xs font-medium">{errors.post.message}</div>}
                </label>
                <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                    <span className="text-gray-600 text-xs font-light uppercase mb-1">Город</span>
                    <input {...register("city")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent"/>
                    {!!errors.city && <div className="text-red-500 text-xs font-medium">{errors.city.message}</div>}
                </label>
                <label className="w-full flex flex-col border border-[#e3e5ed] p-1 rounded">
                    <span className="text-gray-600 text-xs font-light uppercase mb-1">Регион</span>
                    <select {...register("region")} className="p-1 m-0 border-0 outline-none font-bold text-base w-full appearance-none bg-transparent">
                        <option>-Выберите регион-</option>
                        <option id="RU-AD" value="RU-AD">Республика Адыгея</option>
                        <option id="RU-AL" value="RU-AL">Республика Алтай </option>
                        <option id="RU-BA" value="RU-BA">Республика Башкортостан </option>
                        <option id="RU-BU" value="RU-BU">Республика Бурятия </option>
                        <option id="RU-DA" value="RU-DA">Республика Дагестан </option>
                        <option id="RU-IN" value="RU-IN">Республика Ингушетия </option>
                        <option id="RU-KB" value="RU-KB">Кабардино-Балкарская Республика</option>
                        <option id="RU-KL" value="RU-KL">Республика Калмыкия </option>
                        <option id="RU-KC" value="RU-KC">Карачаево-Черкесская Республика</option>
                        <option id="RU-KR" value="RU-KR">Республика Карелия </option>
                        <option id="RU-KO" value="RU-KO">Республика Коми </option>
                        <option id="RU-ME" value="RU-ME">Республика Марий Эл </option>
                        <option id="RU-MO" value="RU-MO">Республика Мордовия </option>
                        <option id="RU-SA" value="RU-SA">Республика Саха (Якутия) </option>
                        <option id="RU-SE" value="RU-SE">Республика Северная Осетия - Алания </option>
                        <option id="RU-TA" value="RU-TA">Республика Татарстан</option>
                        <option id="RU-TY" value="RU-TY">Республика Тыва </option>
                        <option id="RU-UD" value="RU-UD">Удмуртская Республика </option>
                        <option id="RU-KK" value="RU-KK">Республика Хакасия </option>
                        <option id="RU-CE" value="RU-CE">Чеченская Республика</option>
                        <option id="RU-CU" value="RU-CU">Чувашская Республика</option>
                        <option id="RU-ALT" value="RU-ALT">Алтайский край</option>
                        <option id="RU-ZAB" value="RU-ZAB">Забайкальский край</option>
                        <option id="RU-KAM" value="RU-KAM">Камчатский край</option>
                        <option id="RU-KDA" value="RU-KDA">Краснодарский край</option>
                        <option id="RU-KYA" value="RU-KYA">Красноярский край</option>
                        <option id="RU-PER" value="RU-PER">Пермский край</option>
                        <option id="RU-PRI" value="RU-PRI">Приморский край</option>
                        <option id="RU-STA" value="RU-STA">Ставропольский край</option>
                        <option id="RU-KHA" value="RU-KHA">Хабаровский край</option>
                        <option id="RU-AMU" value="RU-AMU">Амурская область </option>
                        <option id="RU-ARK" value="RU-ARK">Архангельская область</option>
                        <option id="RU-AST" value="RU-AST">Астраханская область </option>
                        <option id="RU-BEL" value="RU-BEL">Белгородская область</option>
                        <option id="RU-BRY" value="RU-BRY">Брянская область </option>
                        <option id="RU-VLA" value="RU-VLA">Владимирская область </option>
                        <option id="RU-VGG" value="RU-VGG">Волгоградская область </option>
                        <option id="RU-VLG" value="RU-VLG">Вологодская область </option>
                        <option id="RU-VOR" value="RU-VOR">Воронежская область </option>
                        <option id="RU-IVA" value="RU-IVA">Ивановская область </option>
                        <option id="RU-IRK" value="RU-IRK">Иркутская область </option>
                        <option id="RU-KGD" value="RU-KGD">Калининградская область</option>
                        <option id="RU-KLU" value="RU-KLU">Калужская область </option>
                        <option id="RU-KEM" value="RU-KEM">Кемеровская область </option>
                        <option id="RU-KIR" value="RU-KIR">Кировская область </option>
                        <option id="RU-KOS" value="RU-KOS">Костромская область </option>
                        <option id="RU-KGN" value="RU-KGN">Курганская область </option>
                        <option id="RU-KRS" value="RU-KRS">Курская область </option>
                        <option id="RU-LEN" value="RU-LEN">Ленинградская область </option>
                        <option id="RU-LIP" value="RU-LIP">Липецкая область </option>
                        <option id="RU-MAG" value="RU-MAG">Магаданская область</option>
                        <option id="RU-MOS" value="RU-MOS">Московская область </option>
                        <option id="RU-MUR" value="RU-MUR">Мурманская область </option>
                        <option id="RU-NIZ" value="RU-NIZ">Нижегородская область </option>
                        <option id="RU-NGR" value="RU-NGR">Новгородская область </option>
                        <option id="RU-NVS" value="RU-NVS">Новосибирская область </option>
                        <option id="RU-OMS" value="RU-OMS">Омская область</option>
                        <option id="RU-ORE" value="RU-ORE">Оренбургская область </option>
                        <option id="RU-ORL" value="RU-ORL">Орловская область </option>
                        <option id="RU-PNZ" value="RU-PNZ">Пензенская область </option>
                        <option id="RU-PSK" value="RU-PSK">Псковская область </option>
                        <option id="RU-ROS" value="RU-ROS">Ростовская область </option>
                        <option id="RU-RYA" value="RU-RYA">Рязанская область </option>
                        <option id="RU-SAM" value="RU-SAM">Самарская область </option>
                        <option id="RU-SAR" value="RU-SAR">Саратовская область </option>
                        <option id="RU-SAK" value="RU-SAK">Сахалинская область </option>
                        <option id="RU-SVE" value="RU-SVE">Свердловская область </option>
                        <option id="RU-SMO" value="RU-SMO">Смоленская область </option>
                        <option id="RU-TAM" value="RU-TAM">Тамбовская область </option>
                        <option id="RU-TVE" value="RU-TVE">Тверская область </option>
                        <option id="RU-TOM" value="RU-TOM">Томская область </option>
                        <option id="RU-TUL" value="RU-TUL">Тульская область</option>
                        <option id="RU-TYU" value="RU-TYU">Тюменская область </option>
                        <option id="RU-ULY" value="RU-ULY">Ульяновская область </option>
                        <option id="RU-CHE" value="RU-CHE">Челябинская область </option>
                        <option id="RU-YAR" value="RU-YAR">Ярославская область</option>
                        <option id="RU-MOW" value="RU-MOW">Москва</option>
                        <option id="RU-SPE" value="RU-SPE">Санкт-Петербург</option>
                        <option id="RU-YEV" value="RU-YEV">Еврейская АО</option>
                        <option id="RU-NEN" value="RU-NEN">Ненецкий АО</option>
                        <option id="RU-KHM" value="RU-KHM">Ханты-Мансийский АО</option>
                        <option id="RU-CHU" value="RU-CHU">Чукотский АО</option>
                        <option id="RU-YAN" value="RU-YAN">Ямало-Ненецкий АО</option>
                    </select>
                    {!!errors.region && <div className="text-red-500 text-xs font-medium">{errors.region.message}</div>}
                </label>

            </div>
            <hr className="h-[1px] w-full bg-gray-500 border-0 mt-8 mb-8"/>
            <button className="bg-black text-white uppercase text-xs font-semibold block w-full py-4 rounded border-0 cursor-pointer outline-none mb-8">Продолжить</button>
        </form>
      </div>
    </div>    
  );
}
