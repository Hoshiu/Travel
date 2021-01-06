export default {
  changeCity (state, city) { /* state指所有的公用数据 */
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
