class LocalstoreService {
  getItem(key: string) {
    const item = localStorage.getItem(key);
    return item;
  }

  setItem(key: string, data: string) {
    localStorage.setItem(key, data);
  }
}

const lsInstance = new LocalstoreService();

export default lsInstance;
