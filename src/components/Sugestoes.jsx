import { useState } from 'react';

export default function Sugestoes() {
  const [formData, setFormData] = useState({
    nome: '',
    tel: '',
    email: '',
    msg: '',
  });

  const [formErrors, setFormErrors] = useState({
    nome: '',
    tel: '',
    email: '',
    msg: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'nome': {
        if (value.length < 3) {
          setFormErrors({ ...formErrors, [fieldName]: 'Digite um nome válido com no mínimo 3 caracteres!' });
        } else {
          setFormErrors({ ...formErrors, [fieldName]: '' });
        }
        break;
      }
      case 'tel': {
        if (value.length < 11) {
          setFormErrors({ ...formErrors, [fieldName]: 'Digite um número de telefone válido!' });
        } else {
          setFormErrors({ ...formErrors, [fieldName]: '' });
        }
        break;
      }
      case 'email': {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value)) {
          setFormErrors({ ...formErrors, [fieldName]: 'Digite um email válido!' });
        } else {
          setFormErrors({ ...formErrors, [fieldName]: '' });
        }
        break;
      }
      case 'msg': {
        if (value.length < 20) {
          setFormErrors({ ...formErrors, [fieldName]: 'A mensagem deve ter no mínimo 20 caracteres!' });
        } else {
          setFormErrors({ ...formErrors, [fieldName]: '' });
        }
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = Object.values(formErrors).every((error) => !error);
    if (isFormValid) {
      alert("Formulário enviado.")
      console.log(formData);
    } else {
      alert('Por favor, corrija os erros no formulário antes de enviar.');
    }
  };

  return (
    <>
      <section id="sugestoes" className="section-form">
        <div className="form-box">
          <form onSubmit={handleSubmit} className="form" id="form">
            <h2>Sugestões</h2>
            <div className="inputs">
              <label htmlFor="nome-form">Nome:</label>
              <input
                type="text"
                id="nome-form"
                name="nome"
                placeholder="Digite seu nome(min: 3 caracteres)..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.nome}
              />
              {formErrors.nome && (
                <span className="span-form" id="span-nome">
                  {formErrors.nome}
                </span>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="tel-form">Telefone:</label>
              <input
                type="tel"
                id="tel-form"
                name="tel"
                maxLength="15"
                placeholder="(xx) xxxxx-xxxx(min: 11 caracteres)"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.tel}
              />
              {formErrors.tel && (
                <span className="span-form" id="span-tel">
                  {formErrors.tel}
                </span>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="email-form">Email:</label>
              <input
                type="email"
                id="email-form"
                name="email"
                placeholder="Digite seu email..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email}
              />
              {formErrors.email && (
                <span className="span-form" id="span-email">
                  {formErrors.email}
                </span>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="msg-form">Mensagem:</label>
              <input
                type="text"
                id="msg-form"
                name="msg"
                placeholder="Nos escreva uma sugestão(min: 20 caracteres)..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.msg}
              />
              {formErrors.msg && (
                <span className="span-form" id="span-msg">
                  {formErrors.msg}
                </span>
              )}
            </div>
            <div className="inputs">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
