interface IResponseStandard {
  code: number;
  data: any;
}

async function standard_response(code: number, data: any) {
  const response: IResponseStandard = {
    code: code,
    data: data,
  };

  return response;
}

export { standard_response };
