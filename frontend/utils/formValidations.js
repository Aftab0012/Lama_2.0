const validateForm = (data) => {
  if (data.name === '') {
    toast.warn('Username is required!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }
  if (data.description === '') {
    toast.warn('Password is a required field', {
      position: 'top-right',
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    return false;
  }

  return true;
};

export default validateForm;
