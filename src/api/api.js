import axios from 'axios';
const baseUrl = 'https://theclippers.ge/booking';

export const csrfBookings = async () => {
	try {
		const res = await axios.get(`${baseUrl}/get-csrf-token/`);
		return res.data.csrfToken;
	} catch (err) {
		throw err;
	}
};

export const usersBookings = async () => {
	try {
		const res = await axios.get(`${baseUrl}/bookings/`);
		return res;
	} catch (err) {
		throw err;
	}
};

export const usersBookingsId = async id => {
	try {
		const res = await axios.get(`${baseUrl}/bookings/${id}`);
		return res;
	} catch (err) {
		throw err;
	}
};
export const usersBookingsPut = async (id, data, csrf) => {
	try {
		const res = await axios.put(`${baseUrl}/bookings/${id}`, data, {
			headers: {
				Accept: 'application/json',
				'X-CSRFToken': csrf,
				mode: 'same-origin',
			},
		});

		return res;
	} catch (err) {
		throw err;
	}
};

export const allBarber = async () => {
	try {
		const res = await axios.get(`${baseUrl}/barbery/`);
		return res;
	} catch (err) {
		throw err;
	}
};

export const barberIds = async id => {
	try {
		const res = await axios.get(`${baseUrl}/barbery/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const service = async () => {
	try {
		const res = await axios.get(`${baseUrl}/services/`);
		return res;
	} catch (err) {
		throw err;
	}
};
export const serviceRu = async () => {
	try {
		const res = await axios.get(`${baseUrl}/services-ru/`);
		return res;
	} catch (err) {
		throw err;
	}
};
export const serviceEn = async () => {
	try {
		const res = await axios.get(`${baseUrl}/services-eng/`);
		return res;
	} catch (err) {
		throw err;
	}
};
export const bookingTime = async (time, barberId) => {
	try {
		const res = await axios.get(
			`${baseUrl}/booking-times/?date=${time}&barbery=${barberId}`,
			{
				barbery: barberId,
			}
		);
		return res;
	} catch (err) {
		throw err;
	}
};

export const workingHours = async () => {
	try {
		const res = await axios.get(`${baseUrl}/time/`);
		return res;
	} catch (err) {
		throw err;
	}
};
export const bookingSmsCode = async mobile => {
	try {
		const res = await axios.post(
			`${baseUrl}/bookings/sms_code/`,
			{
				mobile_number: mobile,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return res;
	} catch (err) {
		throw err;
	}
};

export const bookingCreate = async data => {
	try {
		const res = await axios.post(
			`${baseUrl}/bookings/create/`,
			{
				...data,
			},
			{
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		return res;
	} catch (err) {
		throw err;
	}
};

export const barberBookingCreate = async (data, csrf) => {
	try {
		const res = await axios.post(
			`${baseUrl}/bookings/create/barber/`,
			{
				...data,
			},
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'X-CSRFToken': csrf,
					mode: 'same-origin', // sDo not send CSRF token to another
				},
			}
		);
		return res;
	} catch (err) {
		throw err;
	}
};

export const bookingDelete = async (id, csrf) => {
	try {
		const res = await axios.delete(`${baseUrl}/bookings/${id}`, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'X-CSRFToken': csrf,
				mode: 'same-origin', // Do not send CSRF token to another
			},
		});
		return res;
	} catch (err) {
		throw err;
	}
};
