class Request {
   private readonly BASE_URL = 'http://localhost:4000'

   private handleError(ok: boolean) {
      if (!ok) {
         throw new Error('Сервер ответил с ошибкой');
      }
   }
   get(path: string) {
      return fetch(`${this.BASE_URL}/${path}`, {
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
      return fetch(`${this.BASE_URL}/${path}`, {
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
