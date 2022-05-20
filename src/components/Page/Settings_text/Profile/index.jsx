import "./index.scss";

export const Profile = () => {
	return (
		<div className="profile">
			<div className="profile__text">Обновить пароль</div>

			<div>Имя</div>
			<input />

			<div className="avatar">
				<div>Аватар</div>
				<div className="avatar__png">Картинка</div>
				<button>Загрузить новый</button>
			</div>

			<div>
				<div>Пароль</div>
				<input className="profile__input" />
			</div>

			<div>
				<div>Подтверждение пароля</div>
				<input className="profile__input-confirm" />
			</div>

			<button className="profile__button-update">Обновить профиль</button>
		</div>
	);
};
