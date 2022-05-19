import "./index.scss";

export const Profile = () => {
	return (
		<div className="Profile">
			<div className="Profile__UpdatePass">Обновить пароль</div>

			<div>Имя</div>
			<input />

			<div className="Profile__Avatar">
				<div>Аватар</div>
				<div className="Avatar_m">Картинка</div>
				<button>Загрузить новый</button>
			</div>

			<div>
				<div>Пароль</div>
				<input className="Profile__Pass" />
			</div>

			<div>
				<div>Подтверждение пароля</div>
				<input className="Profile__ConfirmPass" />
			</div>

			<button className="Profile__Update">Обновить профиль</button>
		</div>
	);
};
