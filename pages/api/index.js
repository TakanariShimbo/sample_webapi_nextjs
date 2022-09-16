// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


function post_action(req) {
  // get data
  let data_get = req.body;
  let value1 = data_get.value1;
  let value2 = data_get.value2;

  // return data
  let data_send = {
      'value1': value1,
      'value2': value2
  };
  return data_send;
};


export default function sample(req, res) {
  if (req.method == 'POST') {
      let data_send = post_action(req);
      res.status = 200;
      res.json(data_send);
  } else {
    res.status = 400;
    res.json({});
};
};