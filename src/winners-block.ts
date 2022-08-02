function winnersBlock {
    return 


}

export default winnersBlock;


const Http = new XMLHttpRequest();
const url='http://127.0.0.1:3000/get/garage';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}