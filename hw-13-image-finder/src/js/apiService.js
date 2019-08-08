const baseUrl = 'https://pixabay.com/api/';
export default {
  key: '13241537-06d8871706b8937518ecf25ca',
  type: 'photo',
  orientation: 'horizontal',
  page: 1,
  perPage: 12,
  query: '',

  fetchImg() {

    const requestParam = `?key=${this.key}&image_type=${this.type}&orientation=${this.orientation}&q=${this.query}&page=${this.page}&per_page=${this.perPage}`;
    
    return fetch(baseUrl + requestParam)
      .then(res => res.json())
      .then(parsedRes => {
        this.incrementPage();

        return parsedRes.hits;
      })
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage(){
    this.page=1
  }
}
