import React from 'react';
export default function BarberService({ barberService, data }) {
	const selectedLanguage = localStorage.getItem('selectedLanguage');
	return (
		<>
			<div className='col-md-4'>
				<div className='barber-service'>
					<h5>
						{(selectedLanguage === 'ru'
							? 'Волосы'
							: selectedLanguage === 'ka'
							? 'თმა'
							: 'თმა'
						).toString()}
					</h5>

					{barberService.map(res => {
						if (res.category_type === '1') {
							return (
								<div className='form-group' key={res.id} id='contact_form'>
									<input
										type='checkbox'
										name='service'
										id={`s_c${res.id}`}
										value={res.id}
										onChange={data}
									/>
									<label htmlFor={`s_c${res.id}`}>{res.service_name}</label>
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
			<div className='col-md-4'>
				<div className='barber-service'>
					<h5>
						{(selectedLanguage === 'ru'
							? 'Борода'
							: selectedLanguage === 'ka'
							? 'წვერი'
							: 'წვერი'
						).toString()}
					</h5>
					{barberService.map(res => {
						if (res.category_type === '2') {
							return (
								<div className='form-group' key={res.id} id='contact_form'>
									<input
										type='checkbox'
										name='service'
										id={`s_c${res.id}`}
										value={res.id}
										onChange={data}
									/>
									<label htmlFor={`s_c${res.id}`}>{res.service_name}</label>
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
			<div className='col-md-4'>
				<div className='barber-service'>
					<h5>
						{(selectedLanguage === 'ru'
							? 'Общий'
							: selectedLanguage === 'ka'
							? 'ზოგადი'
							: 'ზოგადი'
						).toString()}
					</h5>
					{barberService.map(res => {
						if (res.category_type === '3') {
							return (
								<div className='form-group' key={res.id} id='contact_form'>
									<input
										type='checkbox'
										name='service'
										id={`s_c${res.id}`}
										value={res.id}
										onChange={data}
									/>
									<label htmlFor={`s_c${res.id}`}>{res.service_name}</label>
								</div>
							);
						}
						return null;
					})}
				</div>
			</div>
		</>
	);
}
