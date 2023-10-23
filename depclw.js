// <button onclick="del()">Delete Any</button>
// <button onclick="edit()">Edit Any</button>

let prod = [];

let show = document.getElementById("show");
let name2 = document.getElementById("name").value;
let description = document.getElementById("description").value;
let price = document.getElementById("price").value;
let show2 = "";
show.innerHTML = "";

let dobj = {
  name2,
  description,
  price,
};

function del() {
  allTodos.splice();
  runShit();
}

function edit() {
  let userEdit = prompt("Enter the new Name");
  let userDesc = prompt("Enter the new Description");
  let userPrice = prompt("Enter the new Price");
  dobj.name2 = userEdit;
  dobj.description = userDesc;
  dobj.price = userPrice;

  runShit();
}

function submit() {
  prod.push(dobj);
  show.innerHTML = "";

  runShit();
}

function runShit() {
  show.innerHTML = "";

  for (i = 0; i < prod.length; i++) {
    let elem = prod[i];
    show.innerHTML = "";

    show2 += `
  ${(show.innerHTML = "")}
    <tr>
    <td style="border:1px solid green; padding: 6px;">${i + 1}</td>
    <td style="border:1px solid green; padding: 6px;">${dobj.name2}</td>
    <td style="border:1px solid green; padding: 6px;">${dobj.description}</td>
    <td style="border:1px solid green; padding: 6px;">${dobj.price}</td>
    <td style="border:1px solid green; padding: 6px;"><button onclick = "edit()">Edit</button></td>
    </tr>`;
  }

  console.log(prod);

  show.innerHTML = `<table> 
   <th>
          <td style="border: 1px solid green; padding: 6px">Product Name</td>
          <td style="border: 1px solid green; padding: 6px">
            Product Description
          </td>
          <td style="border: 1px solid green; padding: 6px">Price</td>
          <td style="border: 1px solid green; padding: 6px">Actions</td>
        </th>
  ${(show.innerHTML = "")}

        ${show2}
  </table>`;
}
