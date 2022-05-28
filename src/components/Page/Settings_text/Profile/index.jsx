import {useEffect, useState} from "react";
import {getDownloadURL, listAll, ref, uploadBytes} from "firebase/storage";
import {storage} from "../../../..";
import {useSelector} from "react-redux";
import "./index.scss";

export const Profile = ({setIsOpen}) => {
	const [image, setImage] = useState(null);
	const [photo, setPhoto] = useState(null);
	const user = useSelector((state) => state.reducer);
	const imageRef = ref(storage, user.UserEmail + "/images/");

	const upload = () => {
		if (image !== null) {
			const imageRef = ref(
				storage,
				user.UserEmail + `/images/` + image.name
			);
			uploadBytes(imageRef, image);
		}
		setIsOpen(false);
	};

	useEffect(() => {
		listAll(imageRef).then((response) => {
			response.items.forEach((item) => {
				getDownloadURL(item).then((url) => {
					setPhoto(url);
				});
			});
		});
	}, []);

	return (
		<div className="profile">
			<div className="profile__text">Обновить пароль</div>

			<div>Имя</div>
			<input />

			<div className="avatar">
				<div>Аватар</div>
				<div>
					{photo ? (
						<img className="avatar__png" src={photo} alt="Фото" />
					) : (
						<div className="avatar__not-png">Фото</div>
					)}
				</div>
				<input
					type="file"
					onChange={(event) => setImage(event.target.files[0])}
				/>
			</div>

			<div>
				<div>Пароль</div>
				<input className="profile__input" />
			</div>

			<div>
				<div>Подтверждение пароля</div>
				<input className="profile__input-confirm" />
			</div>

			<button className="profile__button-update" onClick={() => upload()}>
				Обновить профиль
			</button>
		</div>
	);
};
