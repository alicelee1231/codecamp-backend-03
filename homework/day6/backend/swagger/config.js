export const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: '나만의 미니프로젝트 API 명세서',
        version: '0.0.1',
      },
    },
    apis: ['./swagger/*.swagger.js'], // files containing annotations as above
  };
  //*파일이름 : 특정문자가 들어간 모든 파일
  