class Request {
   private handleError(ok: boolean) {
      if (!ok) {
         throw new Error('Сервер ответил с ошибкой');
      }
   }
   // паттерн Adapter
   get(path: string) {
      return fetch(`http://localhost:4000/${path}`, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         },
      }).then((response) => {
         this.handleError(response.ok);
         return response.json();
      });
   }
   post(path: string, payload: object) {
      console.log('Payload for registration:', payload);

      return fetch(`http://localhost:4000/${path}`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(payload),
      }).then((response) => {
         this.handleError(response.ok);
         return response.json();
      });
   }
}
export const request = new Request();
// request.post('eded', { email: 'почта', password: 'пароль' });
