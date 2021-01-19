export const mapObject = obj => {
  return Object.keys(obj)
    .map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]);
    })
    .join('&');
};

export const addPayment = async payment => {
  const res = await fetch('http://localhost:8080/payments', {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: mapObject(payment),
  });
  return res;
};

export const getPayments = async () => {
  const res = await fetch('http://localhost:8080/payments');
  return res;
};

export const fetchUpdatePayment = async payment => {
  const res = await fetch(`http://localhost:8080/payments/${payment.id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: mapObject(payment),
  });
  return res;
};

export const fetchDeletePayment = async id => {
  const res = await fetch(`http://localhost:8080/payments/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
  });
  return res;
};
