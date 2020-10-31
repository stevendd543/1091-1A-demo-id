function change(index) {
  //const p = document.getElementById('show');
  const p = document.querySelector('#show');
  console.log('p', p);
  switch (index) {
    case 1:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01/intro.html"/>';
      break;
    case 2:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w01/pokemon.html"/>';
      break;
    case 3:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w03/imageGallery.html"/>';
      break;
    case 4:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w02/blog.html"/>';
      break;
    case 5:
      p.innerHTML = '<iframe width=100% height=100% src="./w04/dic.html"/>';
      break;
    case 6:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w05-bootstrap/1091-1A-demo-id/w03-div-TKU60/div_tku60.html"/>';
      break;
    case 7:
      p.innerHTML =
        '<iframe width=100% height=100% src="./w06-ms-clone/index.html"/>';
      break;
  }
}
