export default{
  formatDate(time){
    if(time){
      let data = new Date(time);
      return data.getFullYear() + "-" + (data.getMonth()+1) + "-" + data.getDate() + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()
    }
  }
}