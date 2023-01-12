// 1. 사용자가 이름을 입력하면
// user div 에 welcome 이 추가된다.
// inp의 palceholdeer륿 변경


// 2. 사용자가 이름을 입력하면 기억해야하기때문에
// localstorage에 저장한다. 
//




let user = JSON.parse(localStorage.getItem('user'));

let addUser = ev => {

  if (ev.keyCode == 13) {
    let user = {
      name: inp.value
    };
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();

  }
}


let addTodo = ev => {
  if (ev.keyCode == 13) {

    let todo = JSON.parse(localStorage.getItem('todo'));

    if (!todo) {
      let inpTodo = inp.value;
      let todo = {
        items: [inp.value]
      }
      localStorage.setItem('todo', JSON.stringify(todo));
      inp.value = ''; // 텍스트 초기화
      return;
    }

    todo.items.push(inp.value);
    localStorage.setItem('todo', JSON.stringify(todo));
    inp.value = ''; // 텍스트 초기화

  }
}



if (user) {
  userDiv.append(createElement('span', { text: user.name }))
  inp.placeholder = '할일을 작성하세요';
  inp.addEventListener('keyup', addTodo);

} else {
  inp.addEventListener('keyup', addUser);
}
