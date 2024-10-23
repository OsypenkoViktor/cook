class FetchService {
  async get() {}

  async post<T>(URL: string, bodyObj: object): Promise<T> {
    const res = await fetch(URL, {
      method: "post",
      body: JSON.stringify(bodyObj),
    });

    const resToJSON = await res.json();
    return resToJSON;
  }
}

const fetchWrapper = new FetchService();

export default fetchWrapper;
